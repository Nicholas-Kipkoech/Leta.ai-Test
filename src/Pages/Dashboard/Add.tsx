import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CustomInput from "../../reusableComponents/CustomInput";
import { Button } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { ContactServiceClient } from "../../generated/ContactsServiceClientPb";
import { Contact } from "../../generated/contacts_pb";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const id = nanoid();
  const navigate = useNavigate();

  //payload object

  const client = new ContactServiceClient("http://localhost:8080", null);
  const token = Cookies.get("accessToken");
  const metadata = { authorization: `${token}` };

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      toast("Please input all fields");
    } else {
      const contact = new Contact();
      contact.setName(name);
      contact.setId(id);
      contact.setEmail(email);
      contact.setPhone(phone);

      //   const request = new Contact();
      client.addContact(contact, metadata, (err, response) => {
        if (err) {
          console.log(err);
          return;
        }
        return navigate("/dashboard");
      });
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
