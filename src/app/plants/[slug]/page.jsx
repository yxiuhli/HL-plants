import { getPlant } from "@/lib/data";
import React from "react";
import AddToCartButton from './AddToCartButton.client';

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPlant(slug);
  console.log(post);
  return (
    <div className="flex flex-col md:flex-row py-12">
      <div className="w-full min-w-48 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        {post.img && (
          <img src={post.img} alt="" className="w-full h-full md:h-[400px] lg:h-[500px] xl:h-[400px] rounded-lg shadow-lg object-cover" />
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4">
        <div className="flex flex-col md:flex-row justify-between my-4">
          <div className="flex text-xl mx-4">
            <h2 className="text-2xl font-bold text-gray-700">{post.name}</h2>
          </div>
          <div className="flex text-xl mr-8 mx-4">
            <p className="text-lg font-medium text-gray-600">Price: {post.price}</p>
          </div>
        </div>
        <div className="mx-4 my-4">
          <p className="text-gray-500">{post.desc}</p>
        </div>
        <div className="mx-4 my-8 mb-10">
          <p className="text-lg font-medium text-gray-600">Type: {post.type}</p>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default SinglePostPage;