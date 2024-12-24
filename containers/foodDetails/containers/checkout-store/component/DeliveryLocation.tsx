import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TfiAngleDown } from "react-icons/tfi";
import Cookies from "js-cookie";
import axios from "axios";
import { useLocation } from "@/context/LocationProvider";


const LocationContainer = styled.div`
  width: 100%;
  height: 162.776px;
  border-radius: 11.304px;
  padding: 1rem;
  background: #f7f7f7;
  box-shadow: 0px 7.913px 18.086px 0px rgba(158, 158, 158, 0.05);
`;

const LocationDle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  margin-bottom: 1rem;
`;

const LocationDleText = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.129px;
`;

const RegionBtn = styled.div`
  background: #ebebeb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
 
  border-radius: 0.7rem;
  color: #959595;
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  color: #3f3f3f;
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`;

export const DeliveryLocation = () => {
  const { location } = useLocation();

  const url =
    process.env.NEXT_PUBLIC_ADMIN_URL ||
    "https://diboruwa-admin-test.vercel.app";

  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchRegions = async () => {
      const locationCookie = Cookies.get("diboruwa_location");
      const location = locationCookie ? JSON.parse(locationCookie) : null;
  
      if (location?.state) {
        const apiUrl = `${url}/api/locations`;
  
        try {
          const response = await axios.get(apiUrl);
          const apiCities = response.data?.cities; 
  
          if (apiCities && Array.isArray(apiCities)) {
        
            const matchedCity = apiCities.find(
              (city: { name: string }) => city.name === location.state
            );
  
            if (matchedCity) {
           
              const regionNames = matchedCity.regions.map(
                (region: { name: string }) => region.name
              );
              setRegions(regionNames); 
            } else {
              console.error("No matching city found in API data for the state:", location.state);
            }
          } else {
            console.error("Invalid API data format. Expected 'cities' array.");
          }
        } catch (error) {
          console.error("Error fetching regions:", error);
        }
      }
    };
  
    fetchRegions();
  }, []);
  

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    Cookies.set("region", region, { expires: 7 }); 
    setDropdownOpen(false);
  };

  return (
    <LocationContainer>
      <LocationDle>
        <LocationDleText>Delivery location</LocationDleText>
      </LocationDle>

      <RegionBtn onClick={() => setDropdownOpen(!dropdownOpen)}>
        {selectedRegion || "Select region"}
        <TfiAngleDown />

        {dropdownOpen && (
          <Dropdown>
            {regions.length > 0 ? (
              regions.map((region, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleRegionSelect(region)}
                >
                  {region}
                </DropdownItem>
              ))
            ) : (
              <DropdownItem>No regions available</DropdownItem>
            )}
          </Dropdown>
        )}
      </RegionBtn>
    </LocationContainer>
  );
};
