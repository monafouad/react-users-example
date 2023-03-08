import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import React, { useEffect, useState } from 'react';
import DeleteModal from '../../components/Modals/DeleteModal';
import EditModal from '../../components/Modals/EditModal';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
import { ApiService } from '../../services/ApiService';
import GridLayoutUsers from '../GridLayoutUsers/GridLayoutUsers';
import ListLayoutUsers from '../ListLayoutUsers/ListLayoutUsers';

function MainLayout() {
  const [users, setUsers] = useState([]);
  const [listOrGridView, setListOrGrid] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [user, setUser] = useState();

  const handleList = () => {
    setListOrGrid(true);
  };

  const handleGrid = () => {
    setListOrGrid(false);
  };

  useEffect(() => {
    const profileData = async () => {
      try {
        const res = await ApiService.fetchUsers();
        setUsers(
          res.data.sort(function (a, b) {
            return b.name - a.name;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    profileData();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [users, search]);

  const filterUsers = async () => {
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    setUsers(filteredUsers);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    filterUsers();
  };

  const updateUser = (name, username, email, id) => {
    let newUsers = [...users];
    const index = newUsers.findIndex((newUser) => newUser.id === id);
    newUsers[index].name = name;
    newUsers[index].username = username;
    newUsers[index].email = email;

    setUsers(newUsers);
  };

  const deleteUser = (userId) => {
    let updatedUsers = [...users];
    updatedUsers = updatedUsers.filter((user) => user?.id !== userId);
    setUsers(updatedUsers);
    setShowDelModal(false);
  };

  const handleDelete = (user) => {
    setUser(user);
    setShowDelModal(true);
  };

  const handleUpdate = (user) => {
    setUser(user);
    setShowUpdateModal(true);
  };

  const ListUsers = (
    <ListLayoutUsers
      users={filteredUsers}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
  const GridUsers = (
    <GridLayoutUsers
      users={filteredUsers}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );

  return (
    <>
      <Container maxWidth="xl">
        <Box component="div" className="user-container">
          <SecondaryHeader
            onSubmitHandler={onSubmitHandler}
            setSearch={setSearch}
            handleGrid={handleGrid}
            handleList={handleList}
            listOrGridView={listOrGridView}
          />
          {listOrGridView === true ? (
            <List container>{ListUsers}</List>
          ) : (
            <Grid container>{GridUsers}</Grid>
          )}
        </Box>
        {user && (
          <>
            <EditModal
              user={user}
              show={showUpdateModal}
              closeHandler={() => setShowUpdateModal(false)}
              updateUser={updateUser}
            />
            <DeleteModal
              show={showDelModal}
              closeHandler={() => setShowDelModal(false)}
              deleteHandler={() => deleteUser(user.id)}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default MainLayout;
