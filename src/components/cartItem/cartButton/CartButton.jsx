"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Badge, IconButton } from "@mui/material";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";

const CartButton = () => {
  const { cartCount } = useCart();

  return (
    <Link href="/cart">

    <IconButton aria-label="delete" className="mr-4">
      <Badge badgeContent={cartCount} color="error">
        <ShoppingCartIcon className="w-6" />
      </Badge>
    </IconButton>
    </Link>
  );
};

export default CartButton;
