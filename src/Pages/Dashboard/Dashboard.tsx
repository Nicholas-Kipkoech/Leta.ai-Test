import { useState } from "react";
import CustomModal from "../../reusableComponents/CustomModal";
import Navbar from "../Navbar/Navbar";

import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CustomInput from "../../reusableComponents/CustomInput";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../reusableComponents/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { Contact, addContact } from "../../Features/Contacts/ContactsReducer";
import { nanoid } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError]: any = useState("");

  //dispatch function

  const dispatch = useDispatch();

  const contactData: Contact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  //submit the data from the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validate input
    if (!name || !email || !phone) {
      setFormError("Please fill in all the  fields.");
      return;
    }

    dispatch(addContact(contactData));
    setFormError(null);
    setEmail("");
    setPhone("");
    setName("");
  };

  const { contacts } = useSelector((state: any) => state.contacts);

  return (
    <div className="w-full mr-60 ml-60 justify-center ">
      <Navbar />
      <div className="justify-center mt-7 mb-7">
        <Button
          color="primary"
          className="bg-blue-400"
          onClick={() => setVisible(true)}
        >
          Add Contact
        </Button>
        <CustomModal
          ModalVisible={visible}
          handleCancel={() => setVisible(false)}
          handleOk={handleSubmit}
          Title="Add contact"
          content={
            <>
              <div className="text-red-600">{formError && formError}</div>
              <CustomInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                type="text"
                placeholder="Enter name"
              />
              <CustomInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                placeholder="Enter email"
              />
              <CustomInput
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label="Phone"
                type="text"
                placeholder="Enter phone number"
              />
            </>
          }
        />
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right" className="text-red-400">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact: any) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" key={contact.id}>
                  {contact.name}
                </StyledTableCell>
                <StyledTableCell align="right">{contact.phone}</StyledTableCell>
                <StyledTableCell align="right">{contact.email}</StyledTableCell>

                <StyledTableCell align="right">
                  <ButtonGroup
                    variant="contained"
                    aria-label="contained primary button group"
                    className="gap-5"
                  >
                    <Button color="primary">Edit</Button>
                    <Button color="error">Delete</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
