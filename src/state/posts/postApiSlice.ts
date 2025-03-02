import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  id: number;
  title: string;
};

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

export const postApiSlice = createApi({
  reducerPath: "posts",
  baseQuery: baseQuery,
  endpoints: (builder) => {
    return {
      getPosts: builder.query<Post[], {}>({
        query: () => "posts",
      }),
    };
  },
});

export const { useGetPostsQuery } = postApiSlice;
