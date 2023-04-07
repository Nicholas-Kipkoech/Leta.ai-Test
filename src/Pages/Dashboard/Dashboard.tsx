import { FormEvent, useState } from "react";
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
import {
  Contact,
  addContact,
  deleteContact,
  editContact,
  getContact,
} from "../../Features/Contacts/ContactsReducer";
import { nanoid } from "@reduxjs/toolkit";

const Dashboard = () => {
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
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

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: string) => {
    dispatch(editContact({ id, email, phone, name }));
    dispatch(getContact(id));
    setEditVisible(false);
  };

  const { contacts } = useSelector((state: any) => state.contacts);

  return (
    <div className="w-full mr-60 ml-60 justify-center ">
      <Navbar />
      <div className="justify-center mt-7 mb-7">
        <Button
          color="primary"
          className="bg-blue-400"
          onClick={() => setAddVisible(true)}
        >
          Add Contact
        </Button>
        <CustomModal
          ModalVisible={addVisible}
          handleCancel={() => setAddVisible(false)}
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
              <StyledTableRow key={contact.id}>
                <StyledTableCell component="th" scope="row">
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
                    <Button
                      color="primary"
                      onClick={() => setEditVisible(true)}
                    >
                      Edit
                    </Button>
                    <CustomModal
                      ModalVisible={editVisible}
                      handleCancel={() => setEditVisible(false)}
                      Title="Edit contact"
                      handleOk={() => handleEdit(contact.id)}
                      content={
                        <>
                          <CustomInput
                            placeholder="Enter name"
                            name="newName"
                            label="Name"
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                          />
                          <CustomInput
                            placeholder="Enter email"
                            label="Email"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <CustomInput
                            placeholder="Enter phone"
                            label="Phone"
                            value={phone}
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </>
                      }
                    />
                    <Button
                      color="error"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </Button>
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
