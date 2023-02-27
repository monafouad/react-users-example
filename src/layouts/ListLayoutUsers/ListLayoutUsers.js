import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_API } from "../../constants/main";
import "./ListLayoutUsers.scss";

const ListLayoutUsers = ({ users, handleDelete, handleUpdate }) => {
  const navigate = useNavigate();

  const [setChanged] = useState(false);

  return users.map((user, idx) => (<Box key={user.id}>
    <ListItem key={user.id}>
      <ListItemAvatar>
        <Tooltip title={user.username} arrow>
          <Avatar
            className="card-img-top imgGrid"
            variant="circular"
            sx={{margin: 'auto', height: '10rem', paddingTop: 10, width: '10rem!important'}}
            src={IMAGE_API + user.username + ".svg?options[mood][]=happy"}
            alt={user.username}
          ></Avatar>
        </Tooltip>
      </ListItemAvatar>

      <ListItemText
        primary={user.name}
        secondary={user.username}
        value={user.name}
        onChange={(e) => {
          setChanged(true);
        }}
      />
      <ListItemText
        primary={user.company.catchPhrase}
        className="catchPhrase"
        onChange={(e) => {
          setChanged(true);
        }}
      />

      <Fab
        size="small"
        color="primary"
        aria-label="edit"
        onClick={() => handleUpdate(user)}
      >
        <EditIcon />
      </Fab>
      <Fab
        size="small"
        sx={{ marginRight: 2, marginLeft: 2 }}
        color="primary"
        aria-label="delete"
        onClick={() => handleDelete(user)}
      >
        <DeleteIcon />
      </Fab>
      <Fab
        size="small"
        color="primary"
        aria-label="read"
        onClick={() => navigate(`/user-detail/${user?.id}`)}
      >
        <ReadMoreIcon />
      </Fab>
    </ListItem>

    <Divider key={idx} variant="inset" component="li" />
  </Box>))
};

ListLayoutUsers.propTypes = {
  value: PropTypes.string,
};
export default ListLayoutUsers;
