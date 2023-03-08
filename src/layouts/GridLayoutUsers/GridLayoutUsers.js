import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Grid, CardContent, CardActions, Card, Avatar, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IMAGE_API } from '../../constants/main';
import './GridLayoutUsers.scss';

const GridLayoutUsers = ({ users, handleDelete, handleUpdate }) => {
  const navigate = useNavigate();

  return (
    <>
      {users.map((user) => (
        <Grid item xs={12} className="user-item" sm={6} md={4} key={user.id} p={2}>
          <Card>
            <CardContent className="user-item__content">
              <Tooltip title={user.username} arrow>
                <Avatar
                  onClick={() => navigate(`/user-detail/${user?.id}`)}
                  className="avatar"
                  variant="circular"
                  src={IMAGE_API + user.username + '.svg?options[mood][]=happy'}
                  alt={user.username}
                ></Avatar>
              </Tooltip>
              <Typography gutterBottom component="span">
                {user.name}
              </Typography>
              <Typography component="p">{user.username}</Typography>

              <CardActions className="user-item__actions">
                <button aria-label="edit" onClick={() => handleUpdate(user)}>
                  <EditIcon />
                </button>
                <button aria-label="delete" onClick={() => handleDelete(user)}>
                  <DeleteIcon />
                </button>
                <button aria-label="read" onClick={() => navigate(`/user-detail/${user?.id}`)}>
                  <ReadMoreIcon />
                </button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

GridLayoutUsers.propTypes = {
  value: PropTypes.string
};

export default GridLayoutUsers;
