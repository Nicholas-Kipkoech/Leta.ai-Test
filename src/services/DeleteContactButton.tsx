import React, { useState } from "react";

import { Button } from "@mui/material";
import { ContactServiceClient } from "../generated/ContactsServiceClientPb";
import { ContactID } from "../generated/contacts_pb";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteContact } from "../Features/Contacts/ContactsReducer";

interface Props {
  contactId: string;
}

const DeleteContactButton: React.FC<Props> = ({ contactId }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const token = Cookies.get("accessToken");
  const metadata = { authorization: `${token}` };

  const _deleteContact = async () => {
    setLoading(true);

    const client = new ContactServiceClient("http://localhost:8080");
    const request = new ContactID();
    request.setId(contactId);

    try {
      client.deleteContact(request, metadata, (err: any, response) => {
        if (err) {
          toast(err);
          return;
        }
        toast("Contact deleted successfully!");
        dispatch(deleteContact(contactId));
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={_deleteContact}
      disabled={loading}
    >
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default DeleteContactButton;
