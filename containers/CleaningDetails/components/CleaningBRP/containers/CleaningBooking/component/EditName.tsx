import React, { ChangeEvent, useState } from "react";
import styles from "../CleaningBooking.module.css";
import { CiEdit } from "react-icons/ci";

export const EditName = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name");

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.EditPropertyName}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        className={styles.EditNameInput}
        readOnly={!isEditing}
      />
      <CiEdit
        size={24}
        className={styles.EditNameIcon}
        onClick={toggleEdit}
        style={{ cursor: "pointer" }}
        title="Edit Name"
      />
    </div>
  );
};
