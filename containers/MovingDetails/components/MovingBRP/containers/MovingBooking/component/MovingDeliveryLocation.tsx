'use client';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";

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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
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

interface MovingBookingLocationProps {
  onChange: (locationData: {
    currentLocation: string;
    deliveryLocation: string;
  }) => void;
}

export const MovingBookingLocation: React.FC<MovingBookingLocationProps> = ({
  onChange,
}) => {
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<string>("");
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [deliveryCity, setDeliveryCity] = useState<string>("");

  useEffect(() => {
    const currentLocation = `${currentAddress}${currentCity ? ", " + currentCity : ""}`;
    const deliveryLocation = `${deliveryAddress}${deliveryCity ? ", " + deliveryCity : ""}`;
    onChange({ currentLocation, deliveryLocation });
  }, [currentAddress, currentCity, deliveryAddress, deliveryCity, onChange]);

  return (
    <AddressContainer>
      <AddressContainerText>Delivery Location</AddressContainerText>
      <AddressCards>
        {/* Current Location */}
        <AddressCard>
          <LocationDiv>
            <LocationIcon />
            <LocationText>Current Location</LocationText>
          </LocationDiv>
          <div>
            <Label htmlFor="currentAddress">Address</Label>
            <AddressTextarea
              id="currentAddress"
              name="currentAddress"
              placeholder="Write..."
              rows={3}
              onChange={(e) => setCurrentAddress(e.target.value)}
              value={currentAddress}
            />
          </div>
          <div>
            <Label htmlFor="currentCity">Region</Label>
            <Select
              id="currentCity"
              name="currentCity"
              onChange={(e) => setCurrentCity(e.target.value)}
              value={currentCity}
            >
              <option value="">Select</option>
              <option value="City 1">Region 1</option>
              <option value="City 2">Region 2</option>
            </Select>
          </div>
        </AddressCard>

        {/* Delivery Location */}
        <AddressCard>
          <LocationDiv>
            <LocationIcon />
            <LocationText>Delivery Location</LocationText>
          </LocationDiv>
          <div>
            <Label htmlFor="deliveryAddress">Address</Label>
            <AddressTextarea
              id="deliveryAddress"
              name="deliveryAddress"
              placeholder="Write..."
              rows={3}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              value={deliveryAddress}
            />
          </div>
          <div>
            <Label htmlFor="deliveryCity">Region</Label>
            <Select
              id="deliveryCity"
              name="deliveryCity"
              onChange={(e) => setDeliveryCity(e.target.value)}
              value={deliveryCity}
            >
              <option value="">Select</option>
              <option value="Region 1">Region 1</option>
              <option value="Region 2">Region 2</option>
            </Select>
          </div>
        </AddressCard>
      </AddressCards>
    </AddressContainer>
  );
};
