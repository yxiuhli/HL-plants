"use client";
import { useEffect, useState } from "react";
import {
  Typography,
  Divider,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const FilterMenu = ({ productType, products, setFilteredProducts, cate }) => {
  const [categoryFilter, setCategoryFilter] = useState({
    garden: cate === "garden" ? true : false,
    house: cate === "house" ? true : false,
    balcony: cate === "balcony" ? true : false,
    tool: cate === "tool" ? true : false,
    pot: cate === "pot" ? true : false,
  });
  const { garden, house, balcony, tool, pot } = categoryFilter;

  const [priceFilter, setPriceFilter] = useState({
    to50: false,
    to100: false,
    to150: false,
    above: false,
  });
  const { to50, to100, to150, above } = priceFilter;
  const handleCateChange = (event) => {
    setCategoryFilter({
      ...categoryFilter,
      [event.target.name]: event.target.checked,
    });
  };
  const handlePriceChange = (event) => {
    setPriceFilter({
      ...priceFilter,
      [event.target.name]: event.target.checked,
    });
  };

  const handleFilter = () => {
    const filtered = [...products];
    setFilteredProducts(filtered);
    let init = [];
    if (house === true) {
      init = init.concat(
        filtered.filter((product) => product.category === "house")
      );
    }

    if (balcony === true) {
      init = init.concat(
        filtered.filter((product) => product.category === "balcony")
      );
    }
    if (garden === true) {
      init = init.concat(
        filtered.filter((product) => product.category === "garden")
      );
    }
    if (tool === true) {
      init = init.concat(
        filtered.filter((product) => product.category === "tool")
      );
    }
    if (pot === true) {
      init = init.concat(
        filtered.filter((product) => product.category === "pot")
      );
    }
    let init2 = [];
    if (to50 === true) {
      init2 = init2.concat(filtered.filter((product) => product.price < 50));
    }
    if (to100 === true) {
      init2 = init2.concat(
        filtered.filter((product) => product.price < 100 && product.price >= 50)
      );
    }
    if (to150 === true) {
      init2 = init2.concat(
        filtered.filter(
          (product) => product.price < 150 && product.price >= 100
        )
      );
    }
    if (above === true) {
      init2 = init2.concat(filtered.filter((product) => product.price >= 150));
    }

    if (
      !to50 &&
      !to100 &&
      !to150 &&
      !above &&
      !house &&
      !garden &&
      !balcony &&
      !tool &&
      !pot
    ) {
      setFilteredProducts(filtered);
      return;
    }
    if (init.length === 0 && !house && !garden && !balcony && !tool && !pot) {
      setFilteredProducts(init2);
      return;
    }
    if (init2.length === 0 && !to50 && !to100 && !to150 && !above) {
      setFilteredProducts(init);
      return;
    }
    {
      setFilteredProducts(init.filter((value) => init2.includes(value)));
    }
    if (init.length === 0 || init2.length === 0) {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Divider />
      <Typography variant="h7" className="font-[Palatino]">
        CATEGORY
      </Typography>
      {productType === "plant" && (
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={garden}
                  color="teal"
                  onChange={handleCateChange}
                  name="garden"
                />
              }
              label="Garden plants"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={house}
                  color="teal"
                  onChange={handleCateChange}
                  name="house"
                />
              }
              label="House plants"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={balcony}
                  color="teal"
                  onChange={handleCateChange}
                  name="balcony"
                />
              }
              label="Balcony plants"
            />
          </FormGroup>
        </FormControl>
      )}
      {productType === "accessory" && (
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tool}
                  color="teal"
                  onChange={handleCateChange}
                  name="tool"
                />
              }
              label="Tools"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={pot}
                  color="teal"
                  onChange={handleCateChange}
                  name="pot"
                />
              }
              label="Pots"
            />
          </FormGroup>
        </FormControl>
      )}
      <Divider />
      <Typography variant="h7" className="font-[Palatino]">
        PRICE
      </Typography>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={to50}
                color="teal"
                onChange={handlePriceChange}
                name="to50"
              />
            }
            label="Under 50$"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={to100}
                color="teal"
                onChange={handlePriceChange}
                name="to100"
              />
            }
            label="50$ - 100$"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={to150}
                color="teal"
                onChange={handlePriceChange}
                name="to150"
              />
            }
            label="100$ - 150$"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={above}
                color="teal"
                onChange={handlePriceChange}
                name="above"
              />
            }
            label="Above 150$"
          />
        </FormGroup>
      </FormControl>
      <Divider />
      <Button variant="outlined" color="teal" onClick={handleFilter}>
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterMenu;
