import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import UserDetailsLayout from './layouts/UserDetailsLayout/UserDetailsLayout';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/user-detail/:id" element={<UserDetailsLayout />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
