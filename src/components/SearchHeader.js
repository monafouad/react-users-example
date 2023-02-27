import { Box } from "@mui/material";
import React from 'react';
import GridListToggle from '../components/GridListToggle/GridListToggle';
import Search from '../components/Search/Search';

function SearchHeader(props) {
  const { onSubmitHandler, setSearch, handleGrid, handleList, listOrGridView } = props

  return (
    <Box className="top-nav mb-5" marginTop={5} sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Search setSearch={setSearch} onSubmitHandler={onSubmitHandler} />
      <GridListToggle
        handleGrid={handleGrid}
        handleList={handleList}
        buttonGridActive={!listOrGridView}
        buttonListActive={listOrGridView}
      />
    </Box>
  )
}

export default SearchHeader
