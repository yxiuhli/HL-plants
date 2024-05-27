import { getPlant} from "@/lib/data";
import React from "react";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPlant(slug);
  console.log(post);
  return (
    <div className="flex py-12">
      <div className="w-1/2 bg-teal-300">
        {post.img && (
          <img src={post.img} alt="" fill className="px-24 w-full h-[600px]"/>
        )}
      </div>
      <div className="w-1/2 bg-yellow-300">tt</div>
    </div>
  );
};

export default SinglePostPage;
