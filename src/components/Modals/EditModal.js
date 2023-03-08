import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FORM_EMAIL, FORM_NAME, FORM_TITLE, FORM_USERNAME, SUBMIT } from '../../constants/main';
import './Modals.scss';

const EditModal = ({ user, show, closeHandler, updateUser }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setUsername(user.username);
  }, [user]);

  const stopHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <Dialog open={show} onClose={closeHandler} className="modals">
      <DialogContent onClick={(e) => stopHandler(e)}>
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
              sx={{ width: '100%', marginTop: 2 }}
              variant="standard"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              type="text"
              variant="standard"
              label={FORM_USERNAME}
              sx={{ width: '100%', marginY: 4 }}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <TextField
              type="text"
              label={FORM_EMAIL}
              sx={{ width: '100%' }}
              value={email}
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="modals__submit">
              <button type="submit" onClick={closeHandler}>
                {SUBMIT}
              </button>
            </div>
          </DialogContent>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
