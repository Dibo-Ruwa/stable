'use client';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useLocation } from "@/context/LocationProvider";

// Styled components
const AddressContainer = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
`;

const AddressContainerText = styled.p`
  color: #cccccc;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const AddressCards = styled.div`
  width: 100%;
`;

const AddressCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LocationText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #2c2c2c;
`;

const LocationIcon = styled(CiLocationOn)`
  color: #27a124;
  width: 20px;
  height: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #2c2c2c;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #f9f9f9;
  color: var(--Ash-100, #8F8F8F);
  cursor: pointer;
`;

const AddressTextarea = styled.textarea`
  width: 100%;
  background: #f7f7f7;
  resize: none;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  color: #555555;
`;

interface CleaningLocationProps {
  onChange: (locationData: { currentLocation: string }) => void;
}

interface CityData {
  _id: string;
  name: string;
  regions: { _id: string; name: string }[];
}

export const CleaningLocation: React.FC<CleaningLocationProps> = ({
  onChange,
}) => {
  const [address, setAddress] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);

  const { location } = useLocation();

  const fetchStatesAndRegions = async (state: string | null) => {
    if (!state) {
      toast.error("State information is missing.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_ADMIN_URL ||
          "https://diboruwa-admin-test.vercel.app"
        }/api/locations`
      );
      const { cities } = response.data;

      const regions = cities.find((city: CityData) => city.name === state)
        ?.regions.map((region: { name: string }) => region.name) || [];

      setAvailableRegions(regions);
    } catch (error) {
      setError("Failed to fetch regions.");
      toast.error("Failed to load region data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatesAndRegions(location.state);
  }, [location.state]);

  useEffect(() => {
    const fullLocation = `${address}${region ? ", " + region : ""}`;
    onChange({ currentLocation: fullLocation });
  }, [address, region, onChange]);

  return (
    <AddressContainer>
      <AddressContainerText>Cleaning Location</AddressContainerText>
      <AddressCards>
        <AddressCard>
          <LocationDiv>
            <LocationIcon />
            <LocationText>Service Location</LocationText>
          </LocationDiv>
          <div>
            <Label htmlFor="address">Address</Label>
            <AddressTextarea
              id="address"
              name="address"
              placeholder="Enter the cleaning location address..."
              rows={3}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div>
            <Label htmlFor="region">Region</Label>
            <Select
              id="region"
              name="region"
              onChange={(e) => setRegion(e.target.value)}
              value={region}
              disabled={isLoading}
            >
              <option value="">Select region</option>
              {availableRegions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </div>
        </AddressCard>
      </AddressCards>
    </AddressContainer>
  );
};
