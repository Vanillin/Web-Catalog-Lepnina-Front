import { apiSlice } from "./apiSlice";
import { Product } from "../../api/models/product";

export type GetForCatalogRequest = { id: number; isFavorite: boolean };
export type GetForCatalogResponse = Product[];

// export type GetBySectionProductRequest = { id: number };
// export type GetBySectionProductResponse = Product[];

// export type GetByFavoriteProductRequest = any;
// export type GetByFavoriteProductResponse = Product[];

export type AddProductRequest = {
  length?: number;
  height?: number;
  width?: number;
  price?: number;
  discount?: number;
  idPicture?: number;
  idSection?: number;
};
export type AddProductResponse = { id?: number };

export type UpdateProductRequest = Product;
export type UpdateProductResponse = boolean;

export type DeleteProductRequest = { id?: number };
export type DeleteProductResponse = boolean;

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productCatalog: builder.query<
      GetForCatalogResponse,
      { req: GetForCatalogRequest }
    >({
      query: ({ req }) => ({
        url: `/Product/catalog/${req.id}/${req.isFavorite}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    // productsBySection: builder.query<
    //   GetBySectionProductResponse,
    //   { req: GetBySectionProductRequest }
    // >({
    //   query: ({ req }) => ({
    //     url: `/Product/section/${req.id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Product"],
    // }),
    // productsByFavorite: builder.query<
    //   GetByFavoriteProductResponse,
    //   GetByFavoriteProductRequest
    // >({
    //   query: () => ({
    //     url: "/Product/user",
    //     method: "GET",
    //   }),
    //   providesTags: ["Product"],
    // }),
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
  useProductCatalogQuery,
  useProductsCreateMutation,
  useProductsUpdateMutation,
  useProductsDeleteMutation,
} = productApiSlice;
