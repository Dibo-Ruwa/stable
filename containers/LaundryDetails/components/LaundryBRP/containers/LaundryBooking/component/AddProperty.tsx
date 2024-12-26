import React, { useState } from "react";
import styles from "../LaundryBooking.module.css";
import { EditName } from "./EditName";
import { AddPropertyImage } from "./AddPropertyImage";
import { AiOutlinePlus } from "react-icons/ai";
import { PropertyCounter } from "@/component/CustomCounter/PropertyCounter";

export const AddProperty = () => {
  const [properties, setProperties] = useState([
    { id: 1, editing: false },
    { id: 2, editing: false },
  ]);

  // Handle input edit
  const handleEdit = (id: number) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id ? { ...property, editing: true } : property
      )
    );
  };

  // Handle removing a property card
  const handleRemove = (id: number) => {
    setProperties((prev) => prev.filter((property) => property.id !== id));
  };

  // Handle adding a new property card
  const handleAddMore = () => {
    const newId =
      properties.length > 0 ? properties[properties.length - 1].id + 1 : 1;
    setProperties((prev) => [...prev, { id: newId, editing: false }]);
  };

  return (
    <div className={styles.AddPropertyContainer}>
      <div className={styles.AddPropertyCards}>
        {properties.map((property) => (
          <div key={property.id} className={styles.AddPropertyCard}>
            <p
              className={styles.AddPropertyCardText}
              onClick={() => handleRemove(property.id)}
            >
              {property.editing ? "Remove" : "Add Extra"}
            </p>

            <div
              className={styles.AddPropertyEditNameAndCounter}
              onChange={() => handleEdit(property.id)} // Trigger edit detection
            >
              <EditName />
              <PropertyCounter />
            </div>
            <AddPropertyImage />
          </div>
        ))}
      </div>

      <div className={styles.AddProperty_AddMore} onClick={handleAddMore}>
        <AiOutlinePlus className={styles.AddProperty_AddMoreIcon} />
        <p className={styles.AddProperty_AddMoreText}>Add More</p>
      </div>
    </div>
  );
};
