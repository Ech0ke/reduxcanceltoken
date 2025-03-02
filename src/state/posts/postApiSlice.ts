import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  id: number;
  title: string;
};

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay
  return fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  })(args, api, extraOptions);
};

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
