"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Dropdown from "./ui/Dropdown";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import { useLocation } from "@/context/LocationProvider";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.header`
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.8rem;
    margin: 15px 0;
    color: #333;
  }

  p {
    color: #666;
    margin: 10px 0;
    font-size: 1.1rem;
  }

  small {
    color: #888;
    font-size: 0.9rem;
  }

  svg {
    filter: drop-shadow(0 4px 6px rgba(0, 150, 0, 0.2));
  }
`;

const ModalBody = styled.div`
  padding: 20px 0;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 12px;
  margin-bottom: 20px;
  background-color: #fdeaea;
  border-radius: 8px;
  text-align: center;
  animation: shake 0.5s ease-in-out;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 35px;
  position: relative;
  z-index: 10;
`;

const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 5;

  &:first-child {
    z-index: 6;
  }
`;

const SubmitButton = styled.button`
  width: 80%;
  padding: 15px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--primary) 0%, #2ecc71 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 40px auto 10px;
  display: block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.2);
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 204, 113, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  color: #666;

  &:hover {
    background: #e9ecef;
    transform: rotate(90deg);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Toast = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2ecc71;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
  z-index: 1000;
  animation: ${(props) => (props.$isVisible ? slideIn : fadeOut)} 0.3s
    ease-in-out;

  svg {
    font-size: 1.2rem;
  }
`;

interface CityData {
  _id: string;
  name: string;
  regions: { _id: string; name: string }[];
}

const LocationModal: React.FC = () => {
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

  // useEffect(() => {
  //   const hasLocation = Cookies.get(`${companyName}_location`);
  //   if (!hasLocation) {
  //     setShowModal(true);
  //   }
  // }, [companyName]);

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
