import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import './Modals.scss';
import { DELETE_CONFIRMATION, DELETE_YES, DELETE_NO } from '../../constants/main';

const DeleteModal = (props) => {
  const { show, closeHandler, deleteHandler } = props;
  const stopHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <Dialog open={show} onClose={closeHandler} className="modals">
      <DialogContent onClick={(e) => stopHandler(e)}>
        <DialogTitle>{DELETE_CONFIRMATION}</DialogTitle>
        <DialogContent display="flex">
          <div className="modals__confirmation">
            <button onClick={deleteHandler}>{DELETE_YES}</button>
            <button onClick={closeHandler}>{DELETE_NO}</button>
          </div>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
