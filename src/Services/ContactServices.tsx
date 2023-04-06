import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { ContactServiceClient } from "../generated/ContactsServiceClientPb";
import { Empty } from "../generated/contacts_pb";
import { loadContacts } from "../Features/Contacts/ContactsReducer";

const token = Cookies.get("accessToken");

const FetchContacts = () => {
  const dispatch = useDispatch();

  const metadata = { authorization: `${token}` };

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
};

export default FetchContacts;
