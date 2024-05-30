import { getPlant } from "@/lib/data";
import React from "react";
import AddToCartButton from "@/components/addToCart/AddToCart";
import { TruckIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPlant(slug);
  return (
    <div className="flex flex-col md:flex-row py-12">
      <div className="w-full min-w-36 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        {post.img && (
          <img
            src={post.img}
            alt=""
            className="w-full h-full          
           rounded-lg shadow-lg object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 ">
        <div className="flex flex-col md:flex-row justify-between my-4 my-12">
          <div className="flex text-xl mx-4">
            <h2 className="text-2xl font-bold text-gray-700">{post.name}</h2>
          </div>
          <div className="flex text-xl mr-8 mx-4">
            <p className="text-lg font-medium text-gray-600">
              Price: {post.price}
            </p>
          </div>
        </div>
        <div className="mx-4 my-4 my-12">
          <p className="text-gray-500">{post.desc}</p>
        </div>
        <div className="mx-4 my-8 mb-10 my-12">
          <p className="text-lg font-medium text-gray-600">Type: {post.type}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-24">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium text-gray-600 mb-2">
              Free Shipping
            </p>
            <TruckIcon className="w-full h-36 mb-6 object-cover rounded-lg mb-2" />
            <p className="text-gray-500">
              Get free standard shipping when you spend $150 or more. Learn
              More.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium text-gray-600 mb-2">Guarantee</p>
            <CheckBadgeIcon className="w-full h-36 mb-6 object-cover rounded-lg mb-2" />
            <p className="text-gray-500">
              If your plant dies within 30 days, we'll replace it for free.
              Learn More.
            </p>
          </div>
        </div>
        <div className="p-24 mt-24 ">
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
