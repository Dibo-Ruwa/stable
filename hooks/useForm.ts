"use client";

import { useState } from "react";

interface FormState {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

const useForm = (
  initialState: FormState,
  onSubmit: (formData: FormState) => void
) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    const formErrors: FormErrors = { ...errors };

    if (value.trim() === "") {
      formErrors[fieldName] = "This field is required";
    } else {
      delete formErrors[fieldName];
    }

    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    setErrors(formErrors);
  };

  const validateForm = (): boolean => {
    const requiredFields = Object.entries(initialState)
    .map(([key]) => key);

    console.log(requiredFields);

    const formErrors: FormErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (formData[field].trim() === "") {
        formErrors[field] = "This field is required";
        isValid = false;
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const isValid = (): boolean => {
    return Object.values(formData).every((value) => typeof value === 'string' && value.trim() !== "");
  };
  
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      if (validateForm()) {
        onSubmit(formData);
      }
    } else {
      // Handle the case where not all fields are filled
      const formErrors: FormErrors = {};
      Object.entries(formData).forEach(([field, value]) => {
        if (value.trim() === "") {
          formErrors[field] = "This field is required";
        }
      });
      setErrors(formErrors);
    }
  };
  
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
    isValid,
    errors,
  };
};

export default useForm;
