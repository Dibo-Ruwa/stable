import React, { useState } from "react";
import styled from "styled-components";
import { TfiAngleDown } from "react-icons/tfi";

const LocationContainer = styled.div`
  width: 100%;
  height: fit-content;
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

const ErrorMessage = styled.p`
  color: red;
  font-family: Poppins;
  font-size: 14px;
  margin-top: 8px;
`;

interface DeliveryLocationProps {
  regions: { name: string; price: number }[];
  onRegionSelect: (region: string | null) => void;
  error: string | null;
  onErrorClear: () => void;
}

export const DeliveryLocation: React.FC<DeliveryLocationProps> = ({
  regions,
  onRegionSelect,
  error,
  onErrorClear,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    onRegionSelect(region); // Pass selected region to parent
    onErrorClear(); // Clear error when a region is selected
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
            {regions?.length > 0 ? (
              regions?.map((region, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleRegionSelect(region.name)}
                >
                  {region.name} (₦{region.price})
                </DropdownItem>
              ))
            ) : (
              <DropdownItem>No regions available</DropdownItem>
            )}
          </Dropdown>
        )}
      </RegionBtn>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LocationContainer>
  );
};