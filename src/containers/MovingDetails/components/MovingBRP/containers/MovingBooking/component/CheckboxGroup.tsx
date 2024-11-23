'use client'
import React, {useState} from 'react'
import styles from "../MovingBooking.module.css"
type CheckboxOption = {
    label: string;
    value: string;
}


const options: CheckboxOption[] = [
  { label: "Household Goods", value: "householdGoods" },
  { label: "Office Equipment", value: "officeEquipment" },
  { label: "Vehicles", value: "vehicles" },
  { label: "Specialty Items", value: "specialtyItems" },
];

export const CheckboxGroup: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    
    const handleTabChange = (value: string) => {
        setSelectedOptions( prev =>
            prev.includes(value) ? prev.filter(option => option !== value) : [...prev, value]
        );
    }
    return (
        <div className={styles.CheckboxGroup}>
            {options.map(option => (
                <label htmlFor={option.value} key={option.value} className={styles.CheckboxLabel}>
                    <input
                        type="checkbox"
                        id={option.value}
                        className={styles.CheckBoxInput}
                        checked={selectedOptions.includes(option.value)}
                        onChange={() => handleTabChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}
    </div>
  )
}
