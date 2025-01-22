"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Dropdown from "../ui/Dropdown";
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
} from "./location.style";



interface CityData {
  _id: string;
  name: string;
  regions: { _id: string; name: string }[];
}

const LocationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onShowToast: () => void;
}> = ({ isOpen, onClose, onShowToast }) => {
  const { setLocation , location} = useLocation();

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
        setError(
          axios.isAxiosError(error)
            ? error.response?.data?.message || error.message || "Failed to fetch locations"
            : "An unexpected error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatesAndRegions();
  }, [url]);

  const handleStateSelect = (state: string) => {
    setSelectedState(state || null);
    setAvailableRegions(statesAndRegions[state] || []);
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region || "");
  };

  const handleModalClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    if (selectedState && selectedRegion) {
      setLocation(selectedState, selectedRegion);
      Cookies.set(`${companyName}_modal_timestamp`, new Date().toISOString(), {
        expires: 1,
      });

      onShowToast(); // Trigger the toast
      onClose(); 
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <FaMapMarkerAlt size={70} color="#2ecc71" />
          <h2>Set your Delivery location</h2>
          <p>Hello! We currently provide services in key cities across Nigeria</p>
          <small className="small">
            Delivery options and fees may vary based on your location
          </small>
          {location?.state && (
            <CloseButton onClick={handleModalClose}>✖</CloseButton>
          )}
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
  );
};

export default LocationModal;
