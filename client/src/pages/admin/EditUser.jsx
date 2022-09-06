import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import http from "../../http";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditUser({ setEditUser, editUser, open }) {
  console.log(editUser);
  const handleClose = () => setEditUser(false);
  const addressRef = useRef();
  const bankNameRef = useRef();
  const usernameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();

  const submitEdit = async () => {
    const editedUser = {
      ...editUser,
      address: addressRef.current.value,
      bank_name: bankNameRef.current.value,
      city: cityRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      username: usernameRef.current.value,
    };
    const result = await http.put(`/users/${editUser._id}`, editedUser);
    console.log(result);
    handleClose();
  };

  return (
    <div>
      {open ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              required
              inputRef={addressRef}
              sx={{ padding: "15px 0" }}
              id="outlined-required"
              label="Address"
              defaultValue={editUser.address}
            />
            <TextField
              required
              inputRef={bankNameRef}
              sx={{ padding: "15px 0" }}
              id="outlined-required"
              label="Bank name"
              defaultValue={editUser.bank_name}
            />
            <TextField
              required
              inputRef={cityRef}
              sx={{ padding: "15px 0" }}
              id="outlined-required"
              label="City"
              defaultValue={editUser.city}
            />
            <TextField
              required
              inputRef={firstNameRef}
              sx={{ padding: "15px 0" }}
              id="outlined-required"
              label="First name"
              defaultValue={editUser.first_name}
            />
            <TextField
              required
              inputRef={lastNameRef}
              sx={{ padding: "15px 0" }}
              id="outlined-required"
              label="Last name"
              defaultValue={editUser.last_name}
            />
            <TextField
              required
              inputRef={usernameRef}
              sx={{ padding: "15px 0" }}
              id="outlined-required"
              label="Username"
              defaultValue={editUser.username}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ display: "block", m: "auto" }}
              onClick={submitEdit}
            >
              Edit
            </Button>
          </Box>
        </Modal>
      ) : null}
    </div>
  );
}
