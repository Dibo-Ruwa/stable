"use client";

import React, { useState, useRef } from "react";
import styles from "../RequestSubscription.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const AddExtraPropertyImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];

    if (file) {
      const fileType = file.type;
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

      if (!allowedTypes.includes(fileType)) {
        setErrorMessage("Only PNG and JPEG images are allowed.");
        setSelectedImage(null); // Clear selected image
        return;
      }

      setErrorMessage(null); // Clear any existing error messages

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setSelectedImage(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImage = (): void => {
    setSelectedImage(null);
    setErrorMessage(null); // Clear error when removing image
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className={styles.PropertyImageContainer}>
        <div className={styles.PropertyAddImageTexts}>
          <p className={styles.PropertyAddImageText1}>Image</p>
          <p className={styles.PropertyAddImageText2}>(optional)</p>
        </div>
        <div className={styles.PropertyImageUploader} onClick={openFilePicker}>
          <label
            htmlFor="imageUpload"
            className={styles.PropertyImagePlaceholder}
          >
            {!selectedImage ? (
              <div className={styles.PropertyImageAddImage}>
                <AiOutlinePlus className={styles.PropertyImageIcon} />
              </div>
            ) : (
              <div className={styles.PropertyImagePreview}>
                <img
                  src={selectedImage}
                  alt="Property"
                  className={styles.PropertyImage_img}
                />
                <button
                  onClick={removeImage}
                  className={styles.PropertyImageRemoveButton}
                  aria-label="Remove image"
                >
                  <MdClose className={styles.PropertyImageRemoveIcon} />
                </button>
              </div>
            )}
          </label>
          <input
            id="imageUpload"
            ref={fileInputRef}
            type="file"
            accept=".png, .jpg, .jpeg" // Restricting to specific image types
            onChange={handleImageChange}
            className={styles.PropertyImageInput}
            aria-label="Upload an image"
          />
        </div>
        {errorMessage && (
          <p className={styles.PropertyImageError}>{errorMessage}</p>
        )}
      </div>
    </>
  );
};
