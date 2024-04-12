"use client";
import React from "react";
import { Select, MenuItem } from "@mui/material";

const SortMenu = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Select className="w-80"
      value={sort}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value="">Sort by Featured</MenuItem>
      <MenuItem value={10}>Sort by Price: Low To High</MenuItem>
      <MenuItem value={20}>Sort by Price: High To Low</MenuItem>
      <MenuItem value={30}>Sort by Newest</MenuItem>
    </Select>
  );
};

export default SortMenu;
