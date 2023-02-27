import * as React from 'react';
import '../../styles/App.scss';
import './Header.scss';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  return (
    <header>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img id="logo" src="logo.png" className="logo" alt="Logo" />
        </IconButton>
      </Toolbar>
    </header>
  );
};

export default Header;