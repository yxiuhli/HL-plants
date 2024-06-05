"use client";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import CartItem from "@/components/cartItem/CartItem";
import CheckoutModal from "@/components/checkoutModal/CheckoutModal";

const CartPage = () => {
  const { cartItems, cartTotal } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Typography
        style={{
          textAlign: "left",
          marginTop: '20px',
          marginBottom: '20px'
        }}
        variant="h4"
        mt={5}
        mb={5}
      >
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          style={{
            textAlign: "center",
            marginTop: '20px',
            marginBottom: '20px'
          }}
          variant="subtitle1"
          gutterBottom
        >
          Your cart is empty
        </Typography>
      ) : (
        <>
          {/* Listing all items in the cart */}
          {cartItems.map((item) => (
            <Box key={item.product._id} mb={6}>
              <CartItem item={item} />
            </Box>
          ))}

          <Divider></Divider>
          <div className="flex justify-between" style={{marginTop: '20px', marginBottom: '20px'}}>
            <Box mt={2}>
              <Typography variant="h5">
                Total Cost: ${cartTotal.toFixed(2)}
              </Typography>
            </Box>

            <Box mt={2} mb={6}>
              <Button variant="contained" color="teal" onClick={()=>setOpen(true)}>Checkout</Button>
            </Box>
          </div>
        </>
      )}
      <CheckoutModal open={open} setOpen={setOpen} cartItems={cartItems}/>
    </Container>
  );
};

export default CartPage;
