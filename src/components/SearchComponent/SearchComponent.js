import React from 'react';
import { SEARCH_TITLE } from '../../constants/main';
import { TextField, Box } from '@mui/material';
import './SearchComponent.scss';

const SearchComponent = ({ onSubmitHandler, setSearch }) => {
  return (
    <Box component="div" sx={{ display: 'flex', gap: 2, paddingY: 2 }} className="user-search">
      <form onSubmit={onSubmitHandler}>
        <TextField
          id={SEARCH_TITLE}
          label={SEARCH_TITLE}
          variant="standard"
          type={SEARCH_TITLE}
          className="full-width"
          placeholder={SEARCH_TITLE}
          aria-label={SEARCH_TITLE}
          sx={{ marginRight: 4, marginBottom: 2 }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="w-100">
          {SEARCH_TITLE}
        </button>
      </form>
    </Box>
  );
};

export default SearchComponent;
