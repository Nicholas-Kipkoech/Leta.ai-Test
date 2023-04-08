import { TextField } from "@mui/material";
import React, { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;

  type: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  onChange,
  placeholder,
  label,
  type,
}) => {
  return (
    <div>
      <div className="mt-6">{label && label}</div>
      <TextField
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-80"
      />
    </div>
  );
};

export default CustomInput;
