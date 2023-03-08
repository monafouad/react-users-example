import React from 'react';
import { Grid } from '@mui/material';
import GridListToggleComponent from '../GridListToggleComponent/GridListToggleComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

function SecondaryHeader(props) {
  const { onSubmitHandler, setSearch, handleGrid, handleList, listOrGridView } = props;

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Grid item xs={12} md={6} className="content-left">
        <SearchComponent setSearch={setSearch} onSubmitHandler={onSubmitHandler} />
      </Grid>
      <Grid item xs={12} md={6} className="content-right">
        <GridListToggleComponent
          handleGrid={handleGrid}
          handleList={handleList}
          buttonGridActive={!listOrGridView}
          buttonListActive={listOrGridView}
        />
      </Grid>
    </Grid>
  );
}

export default SecondaryHeader;
