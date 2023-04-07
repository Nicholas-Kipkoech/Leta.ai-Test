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

import {
  StyledTableCell,
  StyledTableRow,
} from "../../reusableComponents/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../Features/Contacts/ContactsReducer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  //...get contacts from the array
  const { contacts } = useSelector((state: any) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="w-full mr-60 ml-60 justify-center ">
      <Navbar />
      <div className="justify-center mt-7 mb-7">
        <Button color="primary" variant="contained" className="bg-blue-400">
          <Link to="/dashboard/add">Add Contact</Link>
        </Button>

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
                  <StyledTableCell align="right">
                    {contact.phone}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {contact.email}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <ButtonGroup
                      variant="contained"
                      aria-label="contained primary button group"
                      className="gap-5"
                    >
                      <Button color="secondary">
                        <Link to={`edit/${contact.id}`}>Edit</Link>
                      </Button>
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
    </div>
  );
};

export default Dashboard;
