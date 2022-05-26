import React from "react";

const BlogDetails = ({ post, index }) => {
  return (
    <>
      <div class="hero lg:w-[920px] w-[95%] mx-auto my-10 bg-base-200 shadow-2xl rounded-md">
        <div class="hero-content flex-col lg:flex-row p-10">
          <div>
            <h1 class="md:text-3xl text-3xl font-semibold">
              {index + 1} . {post?.title}
            </h1>
            <p class="py-6 font-bold">{post?.dic}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
