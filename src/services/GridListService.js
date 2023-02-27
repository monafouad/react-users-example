import React, { useState } from "react";

export const [filteredUsers, setFilteredUsers] = useState([]);
export const [buttonListActive, setButtonListActive] = useState(true);
export const [buttonGridActive, setButtonGridActive] = useState(false);
export const [listOrGridView, setListOrGrid] = useState(true);

export const handleList = () => {
  setButtonGridActive(false);
  setButtonListActive(true);
  setListOrGrid(true);
};

export const handleGrid = () => {
  setButtonGridActive(true);
  setButtonListActive(false);
  setListOrGrid(false);
};
