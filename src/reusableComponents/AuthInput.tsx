import { Input } from "antd";
import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;

  type: string;
}

const AuthInput: FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  type,
  label,
}) => {
  return (
    <div className="">
      <div className="text-xl">{label && label}</div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-sm h-12 text-xl "
      />
    </div>
  );
};

export default AuthInput;
