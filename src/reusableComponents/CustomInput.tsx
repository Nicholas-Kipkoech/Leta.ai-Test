import { Input } from "antd";
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
  value,
  placeholder,
  label,
  type,
}) => {
  return (
    <div>
      <div>{label && label}</div>
      <Input type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
