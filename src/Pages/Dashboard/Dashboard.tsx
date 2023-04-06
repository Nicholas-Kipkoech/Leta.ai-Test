import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { ContactServiceClient } from "../../generated/ContactsServiceClientPb";
import { Empty } from "../../generated/contacts_pb";

import Cookies from "js-cookie";

const Dashboard = () => {
  const token = Cookies.get("accessToken");

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
        console.log(response.getContactsList());
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
