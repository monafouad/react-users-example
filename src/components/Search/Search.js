import React from 'react'
import { SEARCH_TITLE } from "../../constants/main";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

const Search = ({ onSubmitHandler, setSearch }) => {

  return (
    <Box sx={{ display: 'flex' }} px={4}>
      <form onSubmit={onSubmitHandler}>
        <TextField
          id={SEARCH_TITLE}
          label={SEARCH_TITLE}
          variant="standard"
          type={SEARCH_TITLE}
          placeholder={SEARCH_TITLE}
          aria-label={SEARCH_TITLE}
          sx={{marginRight: 4}}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" variant="contained" size="large">
          {SEARCH_TITLE}
        </Button>
      </form>

    </Box>
  )

}

export default Search
