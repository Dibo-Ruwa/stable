import React from "react";
import './Checkbox.css'
interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  className,
  labelClassName,
}) => {
  return (
    <label className={`checkbox-container ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
          <div className="checkmark"></div>
      {label && <div className={`checkbox_Label ${labelClassName}`}>{label}</div>}
    </label>
  );
};

