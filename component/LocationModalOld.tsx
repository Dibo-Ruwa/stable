"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Dropdown from "./ui/Dropdown";
import { FaMapMarkerAlt } from "react-icons/fa";
import Cookies from "js-cookie";

// Styled components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--primary);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fdeaea;
  border-radius: 4px;
  text-align: center;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SubmitButton = styled.div`
  width: max-content;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-top: 20px;
  margin-left: auto;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
`;

const CloseButton = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

interface CityData {
  _id: string;
  name: string;
  regions: { _id: string; name: string }[];
}

const LocationModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [statesAndRegions, setStatesAndRegions] = useState<{ [key: string]: string[] }>({});
  const [companyName] = useState<string>("diboruwa");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const url = process.env.NEXT_PUBLIC_ADMIN_URL || 'https://diboruwa-admin-test.vercel.app';

  useEffect(() => {
    const fetchStatesAndRegions = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const apiUrl = `${url}/api/locations`;
        console.log('Fetching from:', apiUrl);
        
        const response = await axios({
          method: 'GET',
          url: apiUrl,
          timeout: 15000,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          validateStatus: (status) => status === 200
        });

        console.log('Raw response:', response);

        if (!response.data) {
          throw new Error('No data received from server');
        }

        const { cities } = response.data;
        
        if (!Array.isArray(cities)) {
          throw new Error('Invalid data format: cities is not an array');
        }

        const statesRegionsMap: { [key: string]: string[] } = {};
        const states: string[] = [];

        cities.forEach((city: CityData) => {
          if (city?.name && Array.isArray(city?.regions)) {
            states.push(city.name);
            statesRegionsMap[city.name] = city.regions
              .filter(region => region && region.name)
              .map(region => region.name);
          }
        });

        if (states.length === 0) {
          throw new Error('No valid cities found in response');
        }

        setAvailableStates(states);
        setStatesAndRegions(statesRegionsMap);
      } catch (error) {
        console.error('Location fetch error:', error);
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to fetch locations';
          setError(errorMessage);
          console.error('Axios error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            config: {
              url: error.config?.url,
              method: error.config?.method
            }
          });
        } else {
          setError('An unexpected error occurred');
          console.error('Non-Axios error:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatesAndRegions();
  }, [url]);

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    if (state && statesAndRegions[state]) {
      setAvailableRegions(statesAndRegions[state]);
    } else {
      setAvailableRegions([]);
    }
    setSelectedRegion("");
  };

  const handleRegionSelect = (selectedOption: string) => {
    setSelectedRegion(selectedOption.toLowerCase());
  };

  const handleModalClose = () => {
    if (selectedState && selectedRegion) {
      Cookies.set(`${companyName}_hasVisited`, "true", { expires: 1 });
      Cookies.set(`${companyName}_selectedState`, selectedState, { expires: 1 });
      Cookies.set(`${companyName}_selectedRegion`, selectedRegion, { expires: 1 });
    }
    setShowModal(false);
  };

  useEffect(() => {
    const hasVisited = Cookies.get(`${companyName}_hasVisited`);

    if (!hasVisited) {
      setShowModal(true);
    }
  }, [companyName]);

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <ModalHeader>
              <h2>Select Your Location</h2>
              <CloseButton onClick={handleModalClose}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              {error && (
                <ErrorMessage>
                  {error}
                </ErrorMessage>
              )}
              {isLoading ? (
                <LoadingMessage>Loading locations...</LoadingMessage>
              ) : (
                <FormControl>
                  <Dropdown
                    placeholder="Select city"
                    options={availableStates}
                    onSelect={handleStateSelect}
                    value={selectedState || ''}
                    disabled={isLoading}
                  />
                  <Dropdown
                    placeholder="Select region"
                    options={availableRegions}
                    onSelect={handleRegionSelect}
                    value={selectedRegion}
                    disabled={!selectedState || isLoading}
                  />
                </FormControl>
              )}
              <SubmitButton onClick={handleModalClose}>Submit</SubmitButton>
            </ModalBody>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default LocationModal;
