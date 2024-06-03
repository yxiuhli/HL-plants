"use client";
import { useCart } from "@/lib/CartContext";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Link
      href={
        (product.type === "plant" ? "plants" : "accessories") +
        "/" +
        product.slug
      }
    >
      <Card className="relative max-w-96 snap-center cursor-pointer">
        <CardMedia
          className=""
          component="img"
          height="400"
          image={product.img}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <p>{product.price}$</p>
          <Button
            variant="contained"
            color="orl"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="absolute rounded-full left-1/2 top-[360px] min-w-[80%] min-h-12
        transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
