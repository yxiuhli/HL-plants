"use client";
import {useEffect , useState} from "react";
import { getProduct } from "@/lib/action";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { LocalShippingOutlined } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/lib/CartContext";

const SingleProductPage = ({ params }) => {
  const { slug } = params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      getProduct(slug).then((data) => setProduct(data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col md:flex-row py-12">
      <div className="w-full min-w-36 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 flex justify-center">
        {product.img && (
          <img
            src={product.img}
            alt=""
            className="w-3/4 h-[550px]  rounded-lg shadow-lg object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-20 ">
        <div className="flex flex-col md:flex-row justify-between my-4">
          <div className="flex text-xl">
            <h2 className="text-2xl font-bold text-gray-700">{product.name}</h2>
          </div>
          <div className="flex text-xl font-semibold mr-8">
            <p className="text-lg font-medium text-gray-600">
              Price: {product.price} $
            </p>
          </div>
        </div>

        <Divider />
        <div className="my-6">
          <p className="text-gray-500 leading-7">{product.desc}</p>
        </div>
        <Divider />
        <div className="flex gap-4 my-6 text-center">
          <div className="">
            <LocalShippingOutlined className="text-5xl object-cover rounded-lg mb-2" />
            <p className="text-lg font-medium text-gray-600 mb-2">
              Free Shipping
            </p>
            <p className="text-gray-500">
              Get free standard shipping when you spend $150 or more.
            </p>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="">
            <VerifiedOutlinedIcon className="text-5xl object-cover rounded-lg mb-2" />
            <p className="text-lg font-medium text-gray-600 mb-2">Guarantee</p>
            <p className="text-gray-500">
              If your plant dies within 30 days, we'll replace it for free.
            </p>
          </div>
        </div>
        <Divider />
        <div className="my-6 flex justify-center">
          <Button
            variant="contained"
            color="teal"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="rounded-full min-w-[40%] min-h-12 z-10"
          >
            {"Add to cart "} <ShoppingCartIcon className="w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
