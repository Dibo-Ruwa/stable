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

  const handleEdit = (id: number) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id ? { ...property, editing: true } : property
      )
    );
  };

  const handleRemove = (id: number) => {
    setProperties((prev) => {
      const updatedProperties = prev.filter((property) => property.id !== id);
      console.log("Updated properties after removal:", updatedProperties); // Log properties after removal
      return updatedProperties;
    });
  };

  const handleAddMore = () => {
    const newId =
      properties.length > 0 ? properties[properties.length - 1].id + 1 : 1;
    setProperties((prev) => {
      const updatedProperties = [...prev, { id: newId, editing: false }];
      console.log("Updated properties after adding more:", updatedProperties); // Log properties after adding
      return updatedProperties;
    });
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
              onChange={() => handleEdit(property.id)}
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
