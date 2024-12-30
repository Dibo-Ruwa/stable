"use client";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import { updateProfile } from "@/utils/helpers/updateUser";
import Loader from "@/component/Loader"; // Assuming you have a Loader component
import {
  ProfileSettingContainer,
  ProfileSettingTitle,
  DropdownMenu,
  DropdownMenuItem,
  MobileDropdownButton,
  MobileBackBtnSettings,
  MobileProfileSettingsBox,
  FormContainer,
  FormFrame,
  FormFirstInput,
  FormName,
  FormLabel,
  FormNameIcon,
  FormNameInput,
  EditIcon,
  FormTextareaBox,
  FormTextareaLabel,
  FormTextareaArea,
  FormSubmit,
} from "./style";

interface CityData {
  _id: string;
  name: string;
  regions: { _id: string; name: string }[];
}

export const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isEditableField, setIsEditableField] = useState<{
    [key: string]: boolean;
  }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [availableStates, setAvailableStates] = useState<string[]>([]);
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const [statesAndRegions, setStatesAndRegions] = useState<{
    [key: string]: string[];
  }>({});

  const { session, userUpdate } = useAuth();

  const initialValues = {
    firstName: session?.user.firstName || "",
    lastName: session?.user.lastName || "",
    email: session?.user.email || "",
    phone: session?.user.phone || "",
    address: session?.user.address || "",
    state: session?.user.state || "",
    lga: session?.user.lga || "",
  };

  const [values, setValues] = useState(initialValues);

  const url =
    process.env.NEXT_PUBLIC_ADMIN_URL ||
    "https://diboruwa-admin-test.vercel.app";

  const fetchStatesAndRegions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${url}/api/locations`);
      const { cities } = response.data;

      const states: string[] = [];
      const statesRegionsMap: { [key: string]: string[] } = {};

      cities.forEach((city: CityData) => {
        states.push(city.name);
        statesRegionsMap[city.name] = city.regions.map((region) => region.name);
      });

      setAvailableStates(states);
      setStatesAndRegions(statesRegionsMap);
    } catch (error) {
      setError("Failed to fetch states and regions.");
      toast.error("Failed to load location data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatesAndRegions();
  }, []);

  useEffect(() => {
    // Initialize selectedState and selectedRegion based on initial values
    if (values.state) {
      setSelectedState(values.state);
      setAvailableRegions(statesAndRegions[values.state] || []);
    }
    if (values.lga) {
      setSelectedRegion(values.lga);
    }
  }, [values.state, values.lga, statesAndRegions]);

  const handleEditToggle = (field: string) => {
    setIsEditableField((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setAvailableRegions(statesAndRegions[state] || []);
    setValues((prev) => ({ ...prev, state, lga: "" })); // Reset region on state change
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setValues((prev) => ({ ...prev, lga: region }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const response = await updateProfile(session?.user._id, values);
      if (response.success) {
        userUpdate(values);
        toast.success("Profile updated successfully!");
        setIsEditableField({});
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    } finally {
      setIsSaving(false);
    }
  };

  const tabTitles = ["Basic Information", "Security Setting", "Delivery Setup"];
  const isAnyFieldEditable = Object.values(isEditableField).some(
    (isEditable) => isEditable
  );

  return (
    <ProfileSettingContainer>
      <ProfileSettingTitle>Profile Settings</ProfileSettingTitle>
      <MobileBackBtnSettings>
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
                  onClick={() => {
                    setActiveTab(index);
                    setIsDropdownOpen(false);
                  }}
                >
                  {title}
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </MobileProfileSettingsBox>
      </MobileBackBtnSettings>

      {activeTab === 0 && (
        <FormContainer onSubmit={handleSubmit}>
          <FormFrame>
            {isSaving && <Loader />} {/* Show loader during save */}
            <FormFirstInput>
              <FormName>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleFieldChange}
                    disabled={!isEditableField.firstName}
                    style={{
                      borderColor: isEditableField.firstName
                        ? "green"
                        : "transparent",
                    }} // Green border when editable
                  />
                  <EditIcon onClick={() => handleEditToggle("firstName")} />
                </FormNameIcon>
              </FormName>
              <FormName>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleFieldChange}
                    disabled={!isEditableField.lastName}
                    style={{
                      borderColor: isEditableField.lastName
                        ? "green"
                        : "transparent",
                    }}
                  />
                  <EditIcon onClick={() => handleEditToggle("lastName")} />
                </FormNameIcon>
              </FormName>
            </FormFirstInput>
            <FormFirstInput>
              <FormName>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    type="email"
                    name="email"
                    value={values.email}
                    disabled
                  />
                </FormNameIcon>
              </FormName>

              <FormName>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleFieldChange}
                    disabled={!isEditableField.phone}
                    style={{
                      borderColor: isEditableField.phone
                        ? "green"
                        : "transparent",
                    }}
                  />
                  <EditIcon onClick={() => handleEditToggle("phone")} />
                </FormNameIcon>
              </FormName>
            </FormFirstInput>
            <FormFirstInput>
              <FormName>
                <FormLabel htmlFor="state">City</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    as="select"
                    name="state"
                    value={selectedState || values.state}
                    onChange={(e) => handleStateSelect(e.target.value)}
                    disabled={!isEditableField.state}
                    style={{
                      borderColor: isEditableField.state
                        ? "green"
                        : "transparent",
                    }}
                  >
                    <option value="">Select a city</option>
                    {availableStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </FormNameInput>
                  <EditIcon onClick={() => handleEditToggle("state")} />
                </FormNameIcon>
              </FormName>

              <FormName>
                <FormLabel htmlFor="lga">Region</FormLabel>
                <FormNameIcon>
                  <FormNameInput
                    as="select"
                    name="lga"
                    value={selectedRegion || values.lga}
                    onChange={(e) => handleRegionSelect(e.target.value)}
                    disabled={!isEditableField.lga || !selectedState}
                    style={{
                      borderColor: isEditableField.lga
                        ? "green"
                        : "transparent",
                    }}
                  >
                    <option value="">Select a region</option>
                    {availableRegions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </FormNameInput>
                  <EditIcon onClick={() => handleEditToggle("lga")} />
                </FormNameIcon>
              </FormName>
            </FormFirstInput>
            <FormTextareaBox>
              <FormTextareaLabel htmlFor="address">Address</FormTextareaLabel>
              <FormNameIcon>
                <FormTextareaArea
                  name="address"
                  value={values.address}
                  onChange={handleFieldChange}
                  rows={4}
                  cols={40}
                  disabled={!isEditableField.address}
                  style={{
                    borderColor: isEditableField.address
                      ? "green"
                      : "transparent",
                  }}
                />
                <EditIcon onClick={() => handleEditToggle("address")} />
              </FormNameIcon>
            </FormTextareaBox>
            <FormSubmit
              type="submit"
              disabled={isSaving || !isAnyFieldEditable}
            >
              {isSaving ? "Submitting..." : "Save"}
            </FormSubmit>
          </FormFrame>
        </FormContainer>
      )}
    </ProfileSettingContainer>
  );
};

export default ProfileForm;
