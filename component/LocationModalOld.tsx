"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Dropdown from "./ui/Dropdown";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import { useLocation } from "@/context/LocationProvider";
import { ModalWrapper, 
  ModalBody, 
  ModalContent, ModalHeader, 
  CloseButton, LoadingMessage, 
  ErrorMessage, 
  DropdownWrapper, 
  SubmitButton, 
  FormControl, 
  Toast 
} from "./newLocationModal/location.style";

interface CityData {
  _id: string;
  name: string;
  regions: { _id: string; name: string }[];
}

const LocationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  
  const { setLocation } = useLocation();

  const [showModal, setShowModal] = useState<boolean>(true);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [statesAndRegions, setStatesAndRegions] = useState<{
    [key: string]: string[];
  }>({});
  const [companyName] = useState<string>("diboruwa");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const url =
    process.env.NEXT_PUBLIC_ADMIN_URL ||
    "https://diboruwa-admin-test.vercel.app";

  useEffect(() => {
    const fetchStatesAndRegions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const apiUrl = `${url}/api/locations`;

        const response = await axios({
          method: "GET",
          url: apiUrl,
          // timeout: 90000,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          validateStatus: (status) => status === 200,
        });

        if (!response.data) {
          throw new Error("No data received from server");
        }

        const { cities } = response.data;

        if (!Array.isArray(cities)) {
          throw new Error("Invalid data format: cities is not an array");
        }

        const statesRegionsMap: { [key: string]: string[] } = {};
        const states: string[] = [];

        cities.forEach((city: CityData) => {
          if (city?.name && Array.isArray(city?.regions)) {
            states.push(city.name);
            statesRegionsMap[city.name] = city.regions
              .filter((region) => region && region.name)
              .map((region) => region.name);
          }
        });

        if (states.length === 0) {
          throw new Error("No valid cities found in response");
        }

        setAvailableStates(states);
        setStatesAndRegions(statesRegionsMap);
      } catch (error) {
        console.error("Location fetch error:", error);
        if (axios.isAxiosError(error)) {
          const errorMessage =
            error.response?.data?.message ||
            error.message ||
            "Failed to fetch locations";
          setError(errorMessage);
          console.error("Axios error details:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            config: {
              url: error.config?.url,
              method: error.config?.method,
            },
          });
        } else {
          setError("An unexpected error occurred");
          console.error("Non-Axios error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatesAndRegions();
  }, [url]);


  useEffect(() => {
    const checkModalVisibility = () => {
      const locationData = Cookies.get(`${companyName}_location`);
      const lastModalShown = Cookies.get(`${companyName}_modal_timestamp`);
      setShowModal(false);

      if (locationData) {
        // If location is already set, check the timestamp
        setShowModal(false);

        if (lastModalShown) {
          const lastShownTime = new Date(lastModalShown).getTime();
          const currentTime = new Date().getTime();
          const hoursSinceLastShown =
            (currentTime - lastShownTime) / (1000 * 60 * 60);

          // Only show modal if more than 24 hours have passed
          setShowModal(hoursSinceLastShown >= 24);
        }
      } else {
        setShowModal(true);

      }
    };

    checkModalVisibility();
  }, [companyName]);


  const handleStateSelect = (state: string) => {
    setSelectedState(state || null);
    setAvailableRegions(statesAndRegions[state] || []);
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region || "");
  };

  const handleModalClose = () => {
    if (selectedState && selectedRegion) {
      Cookies.set("hasVisited", "true", { expires: 1 }); // Set to expire in 24 hours
    }
    setShowModal(false);
  };

  // const handleSubmit = () => {
  //   if (selectedState && selectedRegion) {
  //     // Save location to cookies
  //     Cookies.set(
  //       `${companyName}_location`,
  //       JSON.stringify({
  //         state: selectedState,
  //         region: selectedRegion,
  //       }),
  //       { expires: 1 }
  //     );

  //     // Save timestamp to cookies
  //     Cookies.set(`${companyName}_modal_timestamp`, new Date().toISOString(), {
  //       expires: 1,
  //     });

  //     // Close modal immediately
  //     setShowModal(false);

  //     // Show success toast
  //     setShowToast(true);

  //     // Hide toast after 3 seconds
  //     setTimeout(() => {
  //       setShowToast(false);
  //     }, 3000);
  //   }
  // };
  
  const handleSubmit = () => {
    if (selectedState && selectedRegion) {
      // Update context
      setLocation(selectedState, selectedRegion);

      // Save timestamp to cookies
      Cookies.set(`${companyName}_modal_timestamp`, new Date().toISOString(), {
        expires: 1,
      });

      // Close modal
      setShowModal(false);

      // Show success toast
      setShowToast(true);

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  
  return (
    <>
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <ModalHeader>
              <FaMapMarkerAlt size={70} color="#2ecc71" />
              <h2>Set your Delivery location</h2>
              <p>
                Hello! We currently provide services in key cities across
                Nigeria
              </p>
              <small className="small">
                Delivery options and fees may vary based on your location
              </small>
              <CloseButton onClick={handleModalClose}>✖</CloseButton>
            </ModalHeader>
            <ModalBody>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {isLoading ? (
                <LoadingMessage>Loading locations...</LoadingMessage>
              ) : (
                <FormControl>
                  <DropdownWrapper>
                    <Dropdown
                      placeholder="Select your state"
                      options={availableStates}
                      onSelect={handleStateSelect}
                      value={selectedState || ""}
                    />
                  </DropdownWrapper>
                  <DropdownWrapper>
                    <Dropdown
                      placeholder="Select your region"
                      options={availableRegions}
                      onSelect={handleRegionSelect}
                      value={selectedRegion}
                      disabled={!selectedState}
                    />
                  </DropdownWrapper>
                </FormControl>
              )}
              <SubmitButton
                onClick={handleSubmit}
                disabled={!selectedState || !selectedRegion}
              >
                Confirm Location
              </SubmitButton>
            </ModalBody>
          </ModalContent>
        </ModalWrapper>
      )}

      {showToast && (
        <Toast $isVisible={showToast}>
          <FaCheckCircle />
          Location successfully updated!
        </Toast>
      )}
    </>
  );
};

export default LocationModal;
