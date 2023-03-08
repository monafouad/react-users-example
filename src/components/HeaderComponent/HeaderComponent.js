import * as React from 'react';
import '../../styles/App.scss';
import './HeaderComponent.scss';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
  return (
    <header>
      <Toolbar>
        <Link to="/">
          <img id="logo" src={logo} className="logo" alt="Logo" />
        </Link>
        <Link to="/">Home</Link>
      </Toolbar>
    </header>
  );
};

export default HeaderComponent;
