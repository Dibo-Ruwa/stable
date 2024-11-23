"use client";
import { useState } from "react";
import { BackButton, BackButton2 } from "@/component/ui/BackButton/BackButton";
import { BiEditAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import styled, { css } from "styled-components";
import { SecuritySetting } from "../security-setting/SecuritySetting";
import { DeliverySetup } from "../delivery-setup/DeliverySetup";

// Styled Components
const ProfileSettingContainer = styled.div`
  width: 100%;
  padding: 2rem;
  padding-bottom: 3.6rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;

  @media (min-width: 769px) and (max-width: 868px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    background: transparent;
  }
`;

const ProfileSettingTitle = styled.h3`
  color: var(--Black-100, #2a2a2a);
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 850px) {
    font-size: 19px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

interface ProfileSettingsBoxTitleProps {
  isActive?: boolean;
}

const activeStyle = css`
  background: #fff;
`;

const ProfileSettingsBox = styled.div`
  display: flex;
  padding: 0.4rem;
  border-radius: 6px;
  background: #f9f9f9;
  justify-content: space-between;
  color: var(--Soft-black, #565656);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    display: none;
  }
  @media (min-width: 769px) and (max-width: 968px) {
    display: flex;
    padding: 0.4rem;
    border-radius: 5px;
    background: #f9f9f9;
    color: var(--Soft-black, #565656);
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    gap: 0.6rem;
  }
`;

const ProfileSettingsBoxTitle = styled.p<ProfileSettingsBoxTitleProps>`
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: var(--Soft-black, #565656);
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  ${(props) => props.isActive && activeStyle}

  &:hover {
    background: #fff;
  }

  @media (max-width: 1258px) {
    font-size: 13px;
  }
  @media (max-width: 1024px) {
    padding: 0.5rem 1.8%;
  }

  @media (max-width: 870px) {
    font-size: 14px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 12rem;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  padding: 1rem 0.7rem;
  z-index: 1;
`;

const DropdownMenuItem = styled.div<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.4rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#fff")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const MobileBackBtnSettings = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const MobileDropdownButton = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  border-radius: 4px;
  background-color: #f6f6f6;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const MobileProfileSettingsBox = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transform: translate(14rem);
    z-index: 1;
    justify-content: center;
    background: transparent;
  }
`;

const BackButtonWrapper = styled.div`
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
const MobileBackButtonWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-left: 1.5rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 0;
  // border-radius: 4px;
  // border: 0.5px solid rgba(118, 117, 117, 0.21);
  background: var(--white, #fefefe);

  @media (max-width: 1024px) {
    border: none;
    padding: 0;
    background: transparent;
  }

  @media (max-width: 768px) {
    border: none;
    padding: 1.5rem;
    background: rgba(252, 252, 252, 0.38);
    width: 100%;
  }
`;
const FormFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
  border-radius: 4px;
  width: 100%;
  background: var(--white, #fefefe);

  @media (max-width: 1024px) {
    border: none;
    width: 100%;
    padding: 0;
    background: transparent;
  }
`;

const FormFirstInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 868px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FormName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FormLabel = styled.label`
  color: var(--Soft-black, #565656);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const FormNameIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const FormNameInput = styled.input`
  width: 20vw;
  height: 2.5rem;
  padding-left: 0.7rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #f6f6f6;

  &::placeholder {
    color: var(--Soft-black, #565656);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  &:focus {
    border: 1px solid green;
    outline: none;
  }

  @media (max-width: 1170px) {
    width: 15.4rem;
  }
  @media (max-width: 1024px) {
    width: 15.4rem;
  }

  @media (max-width: 870px) {
    width: 14.47rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    border: 0.407px solid #8f8f8f;
  }

  @media (min-width: 769px) and (max-width: 868px) {
    width: 100%;
  }
`;

const EditIcon = styled(BiEditAlt)`
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #565656;
  cursor: pointer;
`;

const FormTextareaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-inline: auto;

  @media (max-width: 1024px) {
    margin-inline: 0;
  }

  @media (min-width: 769px) and (max-width: 868px) {
    width: 100%;
    margin-inline: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormTextareaLabel = styled.label`
  color: var(--Soft-black, #565656);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const FormTextareaArea = styled.textarea`
  display: flex;
  width: 41vw;
  height: 8rem;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background: rgba(246, 246, 246, 0.66);
  resize: none;

  &::placeholder {
    color: var(--Soft-black, #565656);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: 1px solid green;
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 32rem;
  }

  @media (max-width: 870px) {
    width: 30rem;
  }

  @media (min-width: 769px) and (max-width: 868px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    border: 0.407px solid #8f8f8f;
  }
`;

const FormSubmit = styled.button`
  width: 41vw;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: none;
  background: rgba(118, 117, 117, 0.22);
  color: #fcfcfc;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1024px) {
    width: 32rem;
  }

  @media (max-width: 870px) {
    width: 30rem;
  }
  @media (min-width: 769px) and (max-width: 868px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecuritySettingContainer = styled.div`
    background-color: rgba(252, 252, 252, 0.38);
`;

const DeliverySetupContainer = styled.div`
  background-color: rgba(252, 252, 252, 0.38);
`;

export const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // Default to "Basic Information"
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsDropdownOpen(false); // Close dropdown when an item is selected
  };

  const tabTitles = [
    "Basic Information",
    "Security Setting",
    "Delivery Set-up",
  ];

  return (
    <ProfileSettingContainer>
      <ProfileSettingTitle>Profile Settings</ProfileSettingTitle>
      {/* Desktop View Tabs */}
      <ProfileSettingsBox>
        {tabTitles.map((title, index) => (
          <ProfileSettingsBoxTitle
            key={index}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {title}
          </ProfileSettingsBoxTitle>
        ))}
      </ProfileSettingsBox>

      {/* Mobile View Dropdown */}
      <MobileBackBtnSettings>
        <MobileBackButtonWrapper>
          <BackButton />
        </MobileBackButtonWrapper>
        <MobileProfileSettingsBox>
          <MobileDropdownButton
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {tabTitles[activeTab]}
            <FaAngleDown />
          </MobileDropdownButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {tabTitles.map((title, index) => (
                <DropdownMenuItem
                  key={index}
                  isActive={activeTab === index}
                  onClick={() => handleTabClick(index)}
                >
                  {title}
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </MobileProfileSettingsBox>
      </MobileBackBtnSettings>

      <BackButtonWrapper>
        <BackButton2 />
      </BackButtonWrapper>

      {/* Conditionally Render Content Based on Active Tab */}
      {activeTab === 0 && (
        <FormContainer>
          <FormFrame>
            <FormFirstInput>
              <FormName>
                <FormLabel htmlFor="fullname">Name</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Kelvin Chikezie"
                  />
                  <EditIcon />
                </FormNameIcon>
              </FormName>

              <FormName>
                <FormLabel htmlFor="mobile">Mobile</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    type="text"
                    name="mobile"
                    id="mobile"
                    placeholder="09034145971"
                  />
                  <EditIcon />
                </FormNameIcon>
              </FormName>
            </FormFirstInput>

            <FormFirstInput>
              <FormName>
                <FormLabel htmlFor="state">State</FormLabel>
                <FormNameInput
                  as="input"
                  list="states"
                  id="state"
                  name="state"
                />
                <datalist id="states">
                  <option value="Ilorin" />
                  <option value="Kano" />
                </datalist>
              </FormName>

              <FormName>
                <FormLabel htmlFor="city">City</FormLabel>
                <FormNameInput as="input" list="cities" id="city" name="city" />
                <datalist id="cities">
                  <option value="Ilorin" />
                  <option value="Offa" />
                  <option value="Omu-Aran" />
                  <option value="Kano" />
                  <option value="Wudil" />
                  <option value="Gaya" />
                </datalist>
              </FormName>
            </FormFirstInput>

            <FormTextareaBox>
              <FormTextareaLabel htmlFor="address">Address</FormTextareaLabel>
              <FormTextareaArea
                id="address"
                name="address"
                rows={4}
                cols={40}
                placeholder="24 Louk Street off 120 tonimas"
              />
            </FormTextareaBox>

            <FormSubmit type="submit">Save</FormSubmit>
          </FormFrame>
          {/* Basic Information Form */}
        </FormContainer>
      )}

      {activeTab === 1 && (
        <SecuritySettingContainer>
        <SecuritySetting />
        </SecuritySettingContainer>
      )}

      {activeTab === 2 && (
        <DeliverySetupContainer>
          <DeliverySetup />
        </DeliverySetupContainer>
      )}
    </ProfileSettingContainer>
  );
};
