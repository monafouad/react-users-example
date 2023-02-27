import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_API } from "../../constants/main";
import "./GridLayoutUsers.scss";

const GridLayoutUsers = ({users, handleDelete, handleUpdate}) => {
  const navigate = useNavigate();
  
  return (
    <>
      <Grid container spacing={6} mx='auto'>
        {users.map((user) =>
          <Grid item className="user-item" xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ maxWidth: 400 }}>
              <Tooltip title={user.username} arrow>
                <Avatar
                  onClick={() => navigate(`/user-detail/${user?.id}`)}
                  className="user-item__avatar"
                  src={IMAGE_API + user.username + ".svg?options[mood][]=happy"}
                  alt={user.username}
                  sx={{ width: 160, height: 160 }}

                ></Avatar>
              </Tooltip>

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {user.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {user.username}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >

                  {user.email}
                </Typography>
              </CardContent>
              <CardActions>
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
              </CardActions>
            </Card>
          </Grid>)}
      </Grid>

    </>
  );
};

GridLayoutUsers.propTypes = {
  value: PropTypes.string,
};

export default GridLayoutUsers;
