import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import "./Modals.scss";
import {
  DELETE_CONFIRMATION,
  DELETE_YES,
  DELETE_NO,
} from "../../constants/main";

const DeleteModal = (props) => {
  const { show, closeHandler, deleteHandler } = props;

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

        <DialogTitle>{DELETE_CONFIRMATION}</DialogTitle>
        <DialogContent display="flex">
          <div className="confirmation-buttons">
            <Button variant="contained" size="large" onClick={deleteHandler}>
              {DELETE_YES}
            </Button>

            <Button
              variant="contained"
              size="medium"
              className="mx-2"
              onClick={closeHandler}
            >
              {DELETE_NO}
            </Button>
          </div>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
