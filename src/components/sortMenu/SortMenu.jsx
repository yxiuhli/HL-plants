"use client";
import { useContext } from "react";
import { Select, MenuItem } from "@mui/material";
import SortFilterContext from "@/lib/ControlProvider";

const SortMenu = () => {
  const { sort, setSort } = useContext(SortFilterContext);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Select
      className="w-80"
      value={sort}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={"newest"}>Sort by Newest</MenuItem>
      <MenuItem value={"ascending"}>Sort by Price: Low To High</MenuItem>
      <MenuItem value={"descending"}>Sort by Price: High To Low</MenuItem>
    </Select>
  );
};

export default SortMenu;
