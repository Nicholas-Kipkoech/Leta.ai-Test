import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CustomInput from "../../reusableComponents/CustomInput";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  editContact,
  getContact,
} from "../../Features/Contacts/ContactsReducer";

import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const Edit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const user = useSelector((state: any) => state.contacts.selectedContact);

  useEffect(() => {
    dispatch(getContact(id));
  }, [id]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = () => {
    dispatch(editContact({ id: user.id, name, phone, email }));
    setError("");

    return navigate("/dashboard");
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
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            value={email}
            placeholder="Enter email"
            label="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            value={phone}
            placeholder="Enter phone"
            label="Phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update Contact
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
