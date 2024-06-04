"use client";
import { useCart } from "@/lib/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
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
      <Card className="max-w-80 snap-center cursor-pointer">
        <CardMedia
          className=""
          component="img"
          height="320"
          image={product.img}
          alt={product.name}
        />
        <CardContent className="">
          <Typography variant="h5" className="font-semibold font-[Palatino]">{product.name}</Typography>
          <div className="flex items-center justify-between">

          <Typography variant="h5" className="font-[Palatino]">{product.price}$</Typography>
          <Button
            variant="outlined"
            color="atc"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="rounded-md min-w-[40%] min-h-10 z-10"
          >
            {"Add to cart "} <ShoppingCartIcon className="w-5"/>
          </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
