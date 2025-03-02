import React, { useEffect, useState } from "react";
import { useGetPostsQuery } from "../state/posts/postApiSlice";
import { data, useLocation } from "react-router";

const Posts = () => {
  const location = useLocation();
  const [skipQuery, setSkipQuery] = useState(false);

  useEffect(() => {
    return () => {
      setSkipQuery(true);
    };
  }, [location.pathname]);
  const { data: posts } = useGetPostsQuery({}, { skip: skipQuery });

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
