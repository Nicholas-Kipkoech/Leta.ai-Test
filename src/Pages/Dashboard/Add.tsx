import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CustomInput from "../../reusableComponents/CustomInput";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContact } from "../../Features/Contacts/ContactsReducer";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //payload object

  let contactData = {
    name,
    phone,
    email,
    id: nanoid(),
  };

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      setError("Please input all fields");
    } else {
      dispatch(addContact(contactData));
      setError("");
      setName("");
      setPhone("");
      setEmail("");
      return navigate("/dashboard");
    }
  };

  return (
    <div className="w-full  mr-60 ml-60 justify-center  ">
      <Navbar />
      <form>
        {error && <h2 className="text-red-600 justify-center">{error}</h2>}
        <div className=" flex gap-6 border-gray-600  justify-center">
          <CustomInput
            value={name}
            placeholder="Enter name"
            label="Name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            value={email}
            placeholder="Enter email"
            label="Email"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            value={phone}
            placeholder="Enter phone"
            label="Phone"
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Add Contact
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Add;
