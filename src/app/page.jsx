import ProductCard from "@/components/productCard/ProductCard";
import { getPlants } from "@/lib/data";
import { Typography } from "@mui/material";

const Home = async () => {
  const plants = await getPlants();

  return (
    <div className="flex flex-col justify-start">
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
      <div className="mx-16">
        <Typography
          variant="h4"
          className="ml-2 mt-8 mb-6 font-[Palatino] font-thin text-teal-900"
        >
          Best sellers
        </Typography>
        <div className="w-full pb-2 grid grid-flow-col auto-cols-[30%] overflow-x-auto gap-12 overscroll-auto snap-x">
          {plants.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <div className="mx-16">
      <Typography
          variant="h4"
          className="ml-2 mt-8 mb-6 font-[Palatino] font-thin text-teal-900"
        >
          Recent added
        </Typography>
        <div className="w-full pb-2 grid grid-flow-col auto-cols-[30%] overflow-x-auto gap-12 overscroll-auto snap-x">
          {plants.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <div>Review comment</div>
    </div>
  );
};

export default Home;
