"use client";
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useCart } from "@/lib/CartContext";
import CartItem from "@/components/cartItem/CartItem";

const CartPage = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <Container>
      <Typography
        style={{
          textAlign: "center",
        }}
        variant="h3"
        mb={10}
      >
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          style={{
            textAlign: "center",
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
          <div className="flex justify-between">
            <Box mt={2}>
              <Typography variant="h5">
                Total Cost: ${cartTotal.toFixed(2)}
              </Typography>
            </Box>

            <Box mt={2} mb={6}>
              <Button variant="outlined">Checkout</Button>
            </Box>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
