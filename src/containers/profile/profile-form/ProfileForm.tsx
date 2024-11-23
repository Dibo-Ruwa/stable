"use client";
import { useState } from "react";
import { BackButton, BackButton2 } from "@/components/ui/BackButton/BackButton";
import { BiEditAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { SecuritySetting } from "../security-setting/SecuritySetting";
import { DeliverySetup } from "../delivery-setup/DeliverySetup";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState(0); // Default to "Basic Information"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.ProfileSettingContainer}>
      <h3 className={styles.ProfileSettingTitle}>Profile Settings</h3>

      {/* Desktop Tab Buttons */}
      <div className={styles.ProfileSettingsBox}>
        <p
          className={`${styles.ProfileSettingsBoxTitle} ${
            activeTab === 0
              ? styles.ProfileSettingsBoxTitleActive
              : styles.ProfileSettingsBoxTitleHover
          }`}
          onClick={() => setActiveTab(0)}
        >
          Basic Information
        </p>
        <p
          className={`${styles.ProfileSettingsBoxTitle} ${
            activeTab === 1
              ? styles.ProfileSettingsBoxTitleActive
              : styles.ProfileSettingsBoxTitleHover
          }`}
          onClick={() => setActiveTab(1)}
        >
          Security Setting
        </p>
        <p
          className={`${styles.ProfileSettingsBoxTitle} ${
            activeTab === 2
              ? styles.ProfileSettingsBoxTitleActive
              : styles.ProfileSettingsBoxTitleHover
          }`}
          onClick={() => setActiveTab(2)}
        >
          Delivery Setup
        </p>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={styles.MobileBackBtnSettings}>
        <BackButton className={styles.MobileBackButton} />
        <div
          className={styles.MobileProfileSettingsBox}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div>
            {activeTab === 0
              ? "Basic Information"
              : activeTab === 1
              ? "Security Setting"
              : "Delivery Setup"}
          </div>
          <FaAngleDown />
        </div>
        {isDropdownOpen && (
          <div className={styles.DropdownMenu}>
            {["Basic Information", "Security Setting", "Delivery Setup"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setIsDropdownOpen(false);
                  }}
                  className={`${styles.DropdownMenuItem} ${
                    activeTab === index ? "bg-[#f0f0f0]" : "bg-[#fff]"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        )}
      </div>

      <BackButton2 className={styles.BackButton} />

      {/* Tab Content */}
      {activeTab === 0 && (
        <form className={styles.FormContainer}>
          <div className={styles.FormFrame}>
            {/* Form fields for "Basic Information" */}
            <div className={styles.FormFirstInput}>
              <div className={styles.FormName}>
                <label htmlFor="fullname" className={styles.FormLabel}>
                  Name
                </label>
                <div className={styles.FormNameIcon}>
                  <input
                    type="text"
                    className={styles.FormNameInput}
                    name="fullname"
                    placeholder="Kelvin Chikezie"
                  />
                  <BiEditAlt className={styles.EditIcon} />
                </div>
              </div>

              <div className={styles.FormName}>
                <label htmlFor="mobile" className={styles.FormLabel}>
                  Mobile
                </label>
                <div className={styles.FormNameIcon}>
                  <input
                    type="text"
                    className={styles.FormNameInput}
                    name="mobile"
                    placeholder="09034145971"
                  />
                  <BiEditAlt className={styles.EditIcon} />
                </div>
              </div>
            </div>

            <div className={styles.FormFirstInput}>
              <div className={styles.FormName}>
                <label htmlFor="state" className={styles.FormLabel}>
                  State
                </label>
                <input
                  className={styles.FormNameInput}
                  list="states"
                  id="state"
                  name="state"
                />
                <datalist id="states">
                  <option value="Ilorin" />
                  <option value="Kano" />
                </datalist>
              </div>

              <div className={styles.FormName}>
                <label htmlFor="city" className={styles.FormLabel}>
                  City
                </label>
                <input
                  className={styles.FormNameInput}
                  list="cities"
                  id="city"
                  name="city"
                />
                <datalist id="cities">
                  <option value="Ilorin" />
                  <option value="Offa" />
                  <option value="Omu-Aran" />
                  <option value="Kano" />
                  <option value="Wudil" />
                  <option value="Gaya" />
                </datalist>
              </div>
            </div>

            <div className={styles.FormTextareaBox}>
              <label htmlFor="address" className={styles.FormTextareaLabel}>
                Address
              </label>
              <textarea
                className={styles.FormTextareaArea}
                placeholder="24 Louk Street off 120 tonimas"
                name="address"
                rows={4}
                cols={40}
              ></textarea>
            </div>

            <button className={styles.FormSubmit}>Submit</button>
          </div>
        </form>
      )}
      {activeTab === 1 && (
        <div className={styles.SecuritySettingContainer}>
          <SecuritySetting />
        </div>
      )}
      {activeTab === 2 && (
        <div className={styles.DeliverySetupContainer}>
          <DeliverySetup />
        </div>
      )}
    </div>
  );
};
