"use client";
import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Divider,
} from "@mui/material";
import { useCart } from "@/lib/CartContext";

const CheckoutModal = ({ open, setOpen }) => {
  const { cartItems, cartTotal } = useCart();
  const [value, setValue] = useState("cod");
  console.log(cartItems);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white border-solid border-2 shadow-2xl p-4 rounded-md">
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          className="text-center font-semibold text-teal-900"
        >
          Order Details
        </Typography>
        <form
          className="flex flex-col mt-8"
          //   action={update ? updateProduct : addProduct}
          //   onSubmit={handleSubmit}
        >
          <div className="flex gap-8">
            <div className="flex flex-col gap-4 w-1/2">
              <Typography
                variant="h5"
                component="h2"
                className="text-left font-semibold"
              >
                Order Details
              </Typography>
              <div className="flex gap-6 justify-between">
                <TextField
                  name="fullname"
                  label="Full name"
                  variant="outlined"
                  className="w-1/2"
                />
                <TextField
                  name="phone"
                  label="Phone number"
                  variant="outlined"
                  className="w-[45%]"
                />
              </div>
              <TextField name="address" label="Address" variant="outlined" />
              <hr />
              <Typography
                variant="h5"
                component="h2"
                className="text-left font-semibold"
              >
                Payment Method
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="cod"
                    control={<Radio color="teal"/>}
                    label="COD"
                  />
                  <FormControlLabel
                    value="creditCard"
                    control={<Radio color="teal"/>}
                    label="Credit Card"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="flex flex-col gap-4 w-1/2">
              <Typography
                variant="h5"
                component="h2"
                className="text-left font-semibold"
              >
                Products
              </Typography>
              <ul className="min-w-full">
                {cartItems.map((item) => (
                  <li className="flex justify-between min-w-full px-4 py-1">
                    <div>{item.product.name + "  x  " + item.quantity}</div>
                    <div>{item.product.price + " $"}</div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between min-w-full">
              <Typography
                variant="h6"
                component="h2"
                className="text-left font-semibold "
              >
                {"Total:"}
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className="text-left font-semibold pr-4"
              >
                {cartTotal + " $"}
              </Typography>
              </div>
              
            </div>
          </div>

          <Button variant="contained" color="teal" type="submit" className="mt-4 mb-2">
            Submit
          </Button>
          <Button variant="outlined" color="teal" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CheckoutModal;
