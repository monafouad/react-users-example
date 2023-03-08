import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Grid, Avatar, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGE_API } from '../../constants/main';
import './ListLayoutUsers.scss';

const ListLayoutUsers = ({ users, handleDelete, handleUpdate }) => {
  const navigate = useNavigate();

  return users.map((user) => (
    <Grid container spacing={2} key={user.id} className="user-list">
      <Grid item xs={12} sm={2} className="user-list__content">
        <Tooltip title={user.username} arrow>
          <Avatar
            className="avatar"
            variant="circular"
            src={IMAGE_API + user.username + '.svg?options[mood][]=happy'}
            alt={user.username}
          ></Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={8} className="text-align">
        <Typography gutterBottom component="span">
          {user.name}
        </Typography>
        <Typography component="p">{user.username}</Typography>
      </Grid>

      <Grid item xs={12} sm={2} className="user-list__actions">
        <button aria-label="edit" onClick={() => handleUpdate(user)}>
          <EditIcon />
        </button>
        <button aria-label="delete" onClick={() => handleDelete(user)}>
          <DeleteIcon />
        </button>
        <button aria-label="read" onClick={() => navigate(`/user-detail/${user?.id}`)}>
          <ReadMoreIcon />
        </button>
      </Grid>
    </Grid>
  ));
};

ListLayoutUsers.propTypes = {
  value: PropTypes.string
};

export default ListLayoutUsers;
