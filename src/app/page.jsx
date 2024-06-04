import CategoryCard from "@/components/cartegoryCard/CategoryCard";
import ProductCard from "@/components/productsPanel/productCard/ProductCard";
import Review from "@/components/review/Review";
import { getPlants } from "@/lib/action";
import { Typography } from "@mui/material";

const plants = await getPlants();

const Home = () => {
  const recents = [...plants].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  const categories = [
    { id: 1, name: "Garden plants", img: "/category/cat1.jpg" },
    { id: 2, name: "House plants", img: "/category/cat2.jpg" },
    { id: 3, name: "Balcony plants", img: "/category/cat3.jpg" },
    { id: 4, name: "Tools", img: "/category/cat4.jpg" },
    { id: 5, name: "Pots", img: "/category/cat5.jpg" },
  ];
  const reviews = [
    { id: 1, user: "John C.", rate: 5, date: "03/30/24" ,comment: "Absolutely stellar customer service. I sent a plant as a gift but the recipient had trouble receiving due to their delivery situation. HL-plants worked directly with my recipient to ensure the plant arrived safely. It gave me such peace of mind."},
    { id: 2, user: "Charlotte H.", rate: 5, date: "02/22/24", comment: "Large variety to choose from. Was on a waitlist for my choice and it was worth the wait. So much bigger than I had expected!"},
    { id: 3, user: "Sophia", rate: 5, date: "02/21/24", comment: "My new favorite gift to give! The delivery was timely, I was well informed the entire way, and most importantly the recipient was delighted with their new, healthy, well potted plant BFF. I'll be back!"},
  ]
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
        <div className="w-full pb-2 grid grid-flow-col auto-cols-[22%] overflow-x-auto gap-12 overscroll-auto snap-x">
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
        <div className="w-full pb-2 grid grid-flow-col auto-cols-[22%] overflow-x-auto gap-12 overscroll-auto snap-x">
          {recents.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <div className="mx-16">
        <Typography
          variant="h4"
          className="ml-2 mt-8 mb-6 font-[Palatino] font-thin text-teal-900"
        >
          Category
        </Typography>
        <div className="w-full pb-2 grid grid-flow-col auto-cols-[17%] overflow-x-auto gap-12 overscroll-auto snap-x">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category}></CategoryCard>
          ))}
        </div>
      </div>
      <div className="mt-12 bg-orange-100">
        <Typography
          variant="h6"
          className="ml-2 mt-8 mb-6 font-[Palatino] font-thin text-teal-950 text-center"
        >
          WELCOME TO OUR PLANT FAMILY
        </Typography>
        <div className="w-full pb-12 px-16 grid grid-flow-col auto-cols-[32%] gap-12 overscroll-auto snap-x">
          {reviews.map((review) => (
            <Review review={review}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
