import ProductList from "@/components/productList/ProductList";
import { getPlants } from "@/lib/data";
import { Typography } from "@mui/material";
import Image from "next/image";

const Home = async () => {
  const plants = await getPlants();

  return (
    <div className="flex flex-col justify-start min-h-[calc(100vh-118px)] ">
      <div className="w-full relative h-[450px]">
        <img
          className="absolute top-0 left-0 z-0 static object-cover h-full w-full"
          src="/hometitle.jpg"
          alt="nature image"
        />
        <Typography
          variant="h1"
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-[cursive]"
        >
          Welcome to HL-plants
        </Typography>
      </div>
      <div>
        Best sellers
        <ProductList products={plants}></ProductList>
      </div>
      <div>
        Recent added
        <ProductList products={plants}></ProductList>
      </div>
      <div>Review comment</div>
    </div>
  );
};

export default Home;
