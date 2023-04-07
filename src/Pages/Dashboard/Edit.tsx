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
import { ContactServiceClient } from "../../generated/ContactsServiceClientPb";
import { Contact } from "../../generated/contacts_pb";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Edit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id }: any = useParams();

  const handleSubmit = () => {
    const token = Cookies.get("accessToken");

    const metadata = { authorization: `${token}` };

    const client = new ContactServiceClient("http://localhost:8080");
    const request = new Contact();
    request.setId(id);
    request.setName(name);
    request.setEmail(email);
    request.setPhone(phone);
    try {
      client.updateContact(request, metadata, (err: any, response) => {
        if (err) {
          toast(err);
        }
        if (response === null) {
          toast("All fields are required");
        } else {
          dispatch(editContact({ id, name, email, phone }));
          return navigate("/dashboard");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full  mr-60 ml-60 justify-center  ">
      <Navbar />
      <form>
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
