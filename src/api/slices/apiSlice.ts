import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL ?? "http://localhost:5070",
  credentials: "include",
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Product", "Favorite", "Section", "PictureFile"],
  endpoints: () => ({}),
});

export const {} = apiSlice;
