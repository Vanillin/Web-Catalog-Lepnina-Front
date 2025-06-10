import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL ?? "http://localhost:5070",
  prepareHeaders(headers) {
    const token = localStorage.getItem("auth_token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Product", "Favorite", "Section"],
  endpoints: () => ({}),
});

export const {} = apiSlice;
