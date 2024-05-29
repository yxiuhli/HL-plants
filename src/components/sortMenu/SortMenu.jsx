"use client";
import { useContext } from "react";
import { Select, MenuItem } from "@mui/material";
import SortFilterContext from "@/lib/SortFilterProvider";

const SortMenu = () => {
  const {sort, setSort} = useContext(SortFilterContext)

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
      <MenuItem value={0}>Sort by Newest</MenuItem>
      <MenuItem value={10}>Sort by Price: Low To High</MenuItem>
      <MenuItem value={20}>Sort by Price: High To Low</MenuItem>
    </Select>
  );
};

export default SortMenu;
