import { apiSlice } from "./apiSlice";
import { Product } from "../../api/models/product";

export type GetBySectionProductRequest = { id: number };
export type GetBySectionProductResponse = Product[];

export type GetByFavoriteProductRequest = any;
export type GetByFavoriteProductResponse = Product[];

export type AddProductRequest = {
  length?: number;
  height?: number;
  wigth?: number;
  price?: number;
  discount?: number;
  pictureFile?: number;
  section?: number;
};
export type AddProductResponse = { id?: number };

export type UpdateProductRequest = Product;
export type UpdateProductResponse = boolean;

export type DeleteProductRequest = { id?: number };
export type DeleteProductResponse = boolean;

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productsBySection: builder.mutation<
      GetBySectionProductResponse,
      { req: GetBySectionProductRequest }
    >({
      query: ({ req }) => ({
        url: `/Product/section/${req.id}`,
        method: "GET",
      }),
      invalidatesTags: ["Product"],
    }),
    productsByFavorite: builder.mutation<
      GetByFavoriteProductResponse,
      GetByFavoriteProductRequest
    >({
      query: () => ({
        url: "/Product/user",
        method: "GET",
      }),
      invalidatesTags: ["Product"],
    }),
    productsByFavorite2: builder.query<
      GetByFavoriteProductResponse,
      GetByFavoriteProductRequest
    >({
      query: () => ({
        url: "/Product/user",
        method: "GET",
      }),
      providesTags: ["Section"],
    }),
    productsCreate: builder.mutation<AddProductResponse, AddProductRequest>({
      query: () => ({
        url: "/Product",
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    productsUpdate: builder.mutation<
      UpdateProductResponse,
      UpdateProductRequest
    >({
      query: () => ({
        url: "/Product",
        method: "PUT",
      }),
      invalidatesTags: ["Product"],
    }),
    productsDelete: builder.mutation<
      DeleteProductResponse,
      DeleteProductRequest
    >({
      query: () => ({
        url: "/Product",
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useProductsBySectionMutation,
  useProductsByFavoriteMutation,
  useProductsByFavorite2Query,
  useProductsCreateMutation,
  useProductsUpdateMutation,
  useProductsDeleteMutation,
} = productApiSlice;
