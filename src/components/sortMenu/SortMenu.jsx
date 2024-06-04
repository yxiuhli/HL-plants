"use client";
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";

const SortMenu = ({ filteredProducts, setDisplayProducts }) => {
  const [sort, setSort] = useState("");
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    const sorted = [...filteredProducts];
    if (sort === "ascending") {
      setDisplayProducts(sorted.sort((a, b) => a.price - b.price));
    } else if (sort === "descending") {
      setDisplayProducts(sorted.sort((a, b) => b.price - a.price));
    } else {
      setDisplayProducts(
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [sort, filteredProducts]);

  return (
    <Select
      className="w-80"
      value={sort}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={""}>Sort by Newest</MenuItem>
      <MenuItem value={"ascending"}>Sort by Price: Low To High</MenuItem>
      <MenuItem value={"descending"}>Sort by Price: High To Low</MenuItem>
    </Select>
  );
};

export default SortMenu;
