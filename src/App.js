import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Header from './components/Header/Header';
import UserDetail from './layouts/UserDetails/UserDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/user-detail/:id' element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
