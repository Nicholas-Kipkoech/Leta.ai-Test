import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { ContactServiceClient } from "../../generated/ContactsServiceClientPb";
import { Contact } from "../../generated/contacts_pb";

import Cookies from "js-cookie";

const Dashboard = () => {
  const token = Cookies.get("accessToken");
  const metadata = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    const contactService = new ContactServiceClient("http://localhost:8080");
    const getContactsList = () => {
      const contacts = new Contact();
      contactService.getContacts(contacts, metadata, (err, response) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(response.getContactsList);
        }
      });
    };
    getContactsList();
  }, []);

  return (
    <div className="w-full justify-center">
      <Navbar />
    </div>
  );
};

export default Dashboard;
