import React from "react";
import styled from "styled-components";
import { CiEdit } from "react-icons/ci";

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

const LocationIeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9.043px;
  cursor: pointer;
`;

const LocationEditIcon = styled(CiEdit)`
  width: 21.558px;
  height: 21.558px;
  flex-shrink: 0;
  color: #27a124;
`;

const LocationEditIconText = styled.span`
  color: var(--Green1, #27a124);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LocationDleTextAddress = styled.p`
  color: var(--disabled-color, #767575);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1rem;
`;

const LocationDleAddressTextarea = styled.textarea`
  width: 100%;
  height: 57.342px;
  border: none;
  outline: none;
  resize: none;
  background: #f7f7f7;
  color: var(--primary-color-2-black-50, #3f3f3f);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.129px;
`;

export const DeliveryLocation = () => {
  return (
    <LocationContainer>
      <LocationDle>
        <LocationDleText>Delivery location</LocationDleText>
        <LocationIeIcon>
          <LocationEditIcon />
          <LocationEditIconText>Edit</LocationEditIconText>
        </LocationIeIcon>
      </LocationDle>
      <LocationDleTextAddress>Address</LocationDleTextAddress>
      <LocationDleAddressTextarea
        name="message"
        rows={4}
        cols={20}
        placeholder="No 24 Eberechi street, umuahia, Eberechi street, umuahia, Abia state."
      ></LocationDleAddressTextarea>
    </LocationContainer>
  );
};
