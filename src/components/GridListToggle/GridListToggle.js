import React from "react";

import { LIST_BUTTON, GRID_BUTTON } from '../../constants/main'
import { Box, Button } from "@mui/material";

const GridListToggle = ({ handleList, handleGrid, buttonListActive, buttonGridActive }) => {
    return (
        <Box sx={{display: 'flex', gap: 2, paddingY: 1}}>
            <Button onClick={handleList} id="list" color="primary" variant={`${buttonListActive === true ? "contained" : "outlined"}`}>
                <i className="fa fa-list" aria-hidden="true"></i> {LIST_BUTTON}
            </Button>
            <Button onClick={handleGrid} id="grid" color="primary" variant={`${buttonGridActive === true ? "contained" : "outlined"}`}>
                <i className="fa fa-th" aria-hidden="true"></i> {GRID_BUTTON}
            </Button>
        </Box>
    );
};


export default GridListToggle;
