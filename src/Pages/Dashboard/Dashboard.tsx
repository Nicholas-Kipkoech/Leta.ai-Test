import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { ContactServiceClient } from "../../generated/ContactsServiceClientPb";
import { Empty } from "../../generated/contacts_pb";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loadContacts } from "../../Features/Contacts/ContactsReducer";

const Dashboard = () => {
  //get token for authorization
  const token = Cookies.get("accessToken");

  const dispatch = useDispatch();

  const metadata = { authorization: `${token}` };

  useEffect(() => {
    const contactService = new ContactServiceClient(
      "http://localhost:8080",
      null
    );

    const contacts = new Empty();
    contactService.getContacts(contacts, metadata, (err, response) => {
      if (err) {
        console.log("error fetching contacts");
        return;
      } else {
        dispatch(loadContacts(response.getContactsList()));
      }
    });
  }, []);

  return (
    <div className="w-full justify-center">
      <Navbar />
      <div>
        <table></table>
      </div>
    </div>
  );
};

export default Dashboard;
