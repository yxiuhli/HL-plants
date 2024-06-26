import {
    Box,
    Grid,
    Typography,
    IconButton,
    Button,
    TextField,
    Stack,
  } from "@mui/material";
  import Image from "next/image";
  import { useCart } from "@/lib/CartContext";
  import { DeleteOutlineOutlined, Add, Remove } from "@mui/icons-material";

const CartItem = ({ item }) => {
    const { removeFromCart, updateCartItemQuantity } = useCart();

    const handleQuantityChange = (qty) => {
      const quantity = Number(qty);
      if (quantity >= 1) {
        updateCartItemQuantity(item.product._id, quantity);
      }
    };
  
    const handleRemoveClick = () => {
      removeFromCart(item.product._id);
    };
  
    return (
      <Grid ml={0} alignItems="center" container spacing={10}>
        {/* Product Image and Title */}
        <Grid
          display="flex"
          direction="column"
          alignItems="center"
          gap={1}
          alignSelf="center"
          item
          xs={12}
          sm={4}
        >
          <Box>
            <Image
              src={item.product.img}
              alt={item.product.title}
              width={150}
              height={150}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1">{item.product.title}</Typography>
          </Box>
        </Grid>
        {/* Prooduct Quantity */}
        <Grid alignItems="center" item xs={12} sm={4}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography variant="h5">
              ${(item.product.price * item.quantity).toFixed(2)}
            </Typography>
            <Box>{/*  className="rounded-full border-solid border- p-2 min-w-32"> */}
              {/* Icreasing/Deacreasing Product Quantity Button  */}
              <Stack alignItems="center" direction="row" spacing={1}>
                <IconButton
                  aria-label="decrease"
                  onClick={() => {
                    handleQuantityChange(item.quantity - 1);
                  }}
                >
                  <Remove fontSize="medium" htmlColor="#000" />
                </IconButton>
                <Typography color="grey" variant="h6">
                  &nbsp;{item.quantity}&nbsp;
                </Typography>
                <IconButton
                  aria-label="increase"
                  onClick={() => {
                    handleQuantityChange(item.quantity + 1);
                  }}
                >
                  <Add fontSize="medium" htmlColor="#000" />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        {/* Removing Product From Cart */}
        <Grid item xs={12} sm={4}>
          <IconButton
            aria-label="remove"
            color="error"
            size="large"
            onClick={handleRemoveClick}
          >
            <DeleteOutlineOutlined />
          </IconButton>
        </Grid>
      </Grid>
    );
}

export default CartItem