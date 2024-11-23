"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./ui/Dropdown";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';

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

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  h2 { font-size: 30px; margin-bottom: 30px; }
  p { font-size: 18px; margin-bottom: 5px; }
  .small { font-size: 14px; margin-bottom: 30px; }
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
  background: var(--primary);
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  margin-left: auto;
`;

interface StateAndRegions {
  [key: string]: {
    locations: { name: string; fee: number }[];
  };
}

const LocationModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [availableRegions, setAvailableRegions] = useState<{ name: string; fee: number }[]>([]);

  const statesAndRegions: StateAndRegions = {
    Kano: {
        locations: [
            { name: "Danbare", fee: 300 },
            { name: "Rimin gata", fee: 300 },
            { name: "Rijia zaki", fee: 400 },
            { name: "Jambulo", fee: 500 },
            { name: "Buk old site", fee: 500 },
            { name: "Buk new site", fee: 300 },
            { name: "Kabuga", fee: 500 },
            { name: "Sabon Gari", fee: 1300 },
            { name: "Hotoro", fee: 1500 },
            { name: "Naibawa", fee: 1200 },
            { name: "Gwale", fee: 1200 },
            { name: "Tarauni", fee: 1500 },
            { name: "Kano Municipal", fee: 1200 },
            { name: "Dala", fee: 800 },
            { name: "Zoo Road", fee: 1000 },
        ],
    },
    Ilorin: {
        locations: [
            { name: "Taiwo road", fee: 500 },
            { name: "Tanke", fee: 400 },
            { name: "Oja oba", fee: 600 },
            { name: "Challenge", fee: 500 },
            { name: "Sawmill", fee: 450 },
            { name: "Unilorin", fee: 300 },
            { name: "Kwarapoly", fee: 300 },
            { name: "Unity road", fee: 500 },
            { name: "Post office", fee: 400 },
            { name: "Adeta", fee: 500 },
            { name: "Agbooba", fee: 450 },
            { name: "Adewole", fee: 500 },
            { name: "Gaa-Akanbi", fee: 550 },
            { name: "Fate", fee: 600 },
            { name: "Basin", fee: 500 },
            { name: "Kulende", fee: 450 },
            { name: "Pakata", fee: 400 },
            { name: "Oloje", fee: 500 },
            { name: "Oko olowo", fee: 550 },
        ],
    },
    // Additional states can be added here similarly
};

  useEffect(() => {
    const hasVisited = Cookies.get("hasVisited");
    if (!hasVisited) {
      setShowModal(true);
    }
  }, []);
  const handleStateSelect = (selectedOption: string | null) => {
    setSelectedState(selectedOption);
    const regions = selectedOption ? statesAndRegions[selectedOption]?.locations || [] : [];
    setAvailableRegions(regions);
    setSelectedRegion(""); // Reset region selection on state change

    // // Serialize and save the regions data to cookies
    // if (regions.length > 0) {
    //     const serializedData = JSON.stringify(regions);
    //     Cookies.set('selectedLocations', serializedData, { expires: 3 / 1440 }); // Expires in 7 minutes
    // } else {
    //     Cookies.remove('selectedLocations'); // Remove cookie if no regions are available
    // }
};


const handleRegionSelect = (selectedOption: string) => {
  setSelectedRegion(selectedOption);
  if (selectedState) {
      const selectedFee = statesAndRegions[selectedState]?.locations.find(loc => loc.name === selectedOption)?.fee || 0;
      Cookies.set("selectedState", selectedState, { expires: 1 }); // Save the selected state in cookies
      Cookies.set("selectedRegion", selectedOption, { expires: 1 }); // Save the selected region in cookies
      Cookies.set("selectedFee", String(selectedFee), { expires: 1 }); // Save the delivery fee
  }
};


const handleModalClose = () => {
  if (selectedState && selectedRegion) {
      Cookies.set("hasVisited", "true", { expires: 1 }); // Also set to expire in 24 hours
  }
  setShowModal(false);
};

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <Header>
              <FaMapMarkerAlt size={70} style={{ marginBottom: '20px' }} color="green" />
              <h2>Set your Delivery location</h2>
              <p>Hello! We currently provide services in key cities across Nigeria</p>
              <small className="small">Delivery options and fees may vary based on your location</small>
            </Header>
            <FormControl>
              <Dropdown
                placeholder="Select state"
                options={Object.keys(statesAndRegions)}
                onSelect={handleStateSelect}
              />
              <Dropdown
                placeholder="Select region"
                options={availableRegions.map(region => region.name)}
                onSelect={handleRegionSelect}
              />
            </FormControl>
            <SubmitButton onClick={handleModalClose}>Submit</SubmitButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default LocationModal;
