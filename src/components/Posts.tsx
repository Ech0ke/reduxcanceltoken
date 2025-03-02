import React from "react";
import { useGetPostsQuery } from "../state/posts/postApiSlice";
import { data } from "react-router";

const Posts = () => {
  const { data: posts } = useGetPostsQuery({});

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
