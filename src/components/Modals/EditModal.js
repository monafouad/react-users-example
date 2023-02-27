import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  FORM_EMAIL,
  FORM_NAME,
  FORM_TITLE,
  FORM_USERNAME,
  SUBMIT,
} from "../../constants/main";
import "./Modals.scss";

const EditModal = ({ user, show, closeHandler, updateUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setUsername(user.username);
  }, [user]);

  const stopHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <Dialog open={show} onClose={closeHandler}>
      <DialogContent onClick={(e) => stopHandler(e)}>
        <IconButton
          sx={{ margin: 2 }}
          variant="icon"
          className="close"
          onClick={() => closeHandler()}
        >
          x
        </IconButton>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeHandler();
            updateUser(name, username, email, user.id);
          }}
        >
          <DialogTitle>{FORM_TITLE} </DialogTitle>
          <DialogContent display="flex">
            <TextField
              type="text"
              label={FORM_NAME}
              sx={{ width: "100%", marginTop: 2 }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              type="text"
              size="Normal"
              label={FORM_USERNAME}
              sx={{ width: "100%", marginY: 4 }}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <TextField
              type="text"
              label={FORM_EMAIL}
              sx={{ width: "100%" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </DialogContent>
          <Button
            variant="contained"
            size="medium"
            className="mx-2"
            type="submit"
            onClick={closeHandler}
          >
            {SUBMIT}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
