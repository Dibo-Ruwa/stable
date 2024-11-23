import { useState } from "react";

export type FormState = {
  [key: string]: any;
};

type ValidationRules = {
  [key: string]: (value: any, values: FormState) => string | undefined;
};

type FormErrors = {
  [key: string]: string | undefined;
};

type UseFormHook = {
  values: FormState;
  errors: FormErrors;
  handleChange: (field: string, value: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const useForm = (
  initialState: FormState,
  onSubmit: () => void,
  validations: ValidationRules
): UseFormHook => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: string, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));

    if (validations[field]) {
      const errorMessage = validations[field](value, values);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: errorMessage,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    Object.keys(validations).forEach((field) => {
      const errorMessage = validations[field](values[field], values);
      if (errorMessage) {
        newErrors[field] = errorMessage;
      }
    });

    console.log(newErrors)

    if (Object.keys(newErrors).length <= 0) {
      onSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
