"use client"
import React from 'react'
import {
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import Link from "next/link";

const CategoryCard = ({category}) => {
  return (
    <Link
      href={(category.id==="tool" || category.id==="pot"? `/accessories?category=${category.id}` : `/plants?category=${category.id}`)}
    >
      <Card className="relative max-w-64 max-h-72 snap-center cursor-pointer">
        <CardMedia
          className=""
          component="img"
          height="400"
          image={category.img}
          alt={category.name}
        />
          <Typography variant="h6" className="absolute left-1/2 top-[250px] w-max px-4 py-2 
        transform -translate-x-1/2 -translate-y-1/2 z-10 text-center bg-gray-700/40 text-white font-[Palatino]">{category.name}</Typography>
      </Card>
    </Link>
  )
}

export default CategoryCard