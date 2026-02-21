import { useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const validate = (validationFn: (value: string) => string | null) => {
    const result = validationFn(value);

    if (result) {
      setError(result);
      return false;
    }

    setError("");
    return true;
  };

  return {
    value,
    onChange,
    error,
    setValue,
    setError,
    validate
  };
};
