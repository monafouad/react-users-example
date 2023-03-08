import React from 'react';
import './GridListToggleComponent.scss';
import { LIST_BUTTON, GRID_BUTTON } from '../../constants/main';
import { Box } from '@mui/material';

const GridListToggleComponent = ({
  handleList,
  handleGrid,
  buttonListActive,
  buttonGridActive
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, paddingY: 2 }} className="grid-list-toggle">
      <button
        onClick={handleList}
        id="list"
        className={`${
          buttonListActive === true ? 'grid-list-toggle__active' : 'grid-list-toggle__inactive'
        }`}
      >
        {LIST_BUTTON}
      </button>
      <button
        onClick={handleGrid}
        id="grid"
        className={`${
          buttonGridActive === true ? 'grid-list-toggle__active' : 'grid-list-toggle__inactive'
        }`}
      >
        {GRID_BUTTON}
      </button>
    </Box>
  );
};

export default GridListToggleComponent;
