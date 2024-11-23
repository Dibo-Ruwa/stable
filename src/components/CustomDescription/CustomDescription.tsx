import React from "react";
import './CustomDescription.css'
interface CustomDescriptionProps {
  label?: string; // Label for the textarea
  placeholder?: string; // Placeholder for the textarea
  value: string; // Value of the textarea
  onChange: (newDescription: string) => void; // Function to handle changes
  containerClassName?: string; // Custom class for the container
  labelClassName?: string; // Custom class for the label
  textareaClassName?: string; // Custom class for the textarea
}

export const CustomDescription: React.FC<CustomDescriptionProps> = ({
  label = "Description",
  placeholder = "Write...",
  value,
  onChange,
  containerClassName,
  labelClassName,
  textareaClassName,
}) => {
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <div
      className={containerClassName ?? "CustomDescription_DescriptionContainer"}
    >
      <label
        htmlFor="description"
        className={labelClassName ?? "CustomDescription_DescriptionText"}
      >
        {label}
      </label>
      <textarea
        name="Description"
        className={textareaClassName ?? "CustomDescription_DescriptionTextarea"}
        placeholder={placeholder}
        value={value}
        onChange={handleDescriptionChange}
        cols={30}
        rows={5}
      ></textarea>
    </div>
  );
};
