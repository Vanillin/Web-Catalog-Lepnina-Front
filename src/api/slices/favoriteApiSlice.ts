import { apiSlice } from "./apiSlice";
import { Favorite } from "../../api/models/favorite";

export type GetByUserFavoriteRequest = { idUser?: number };
export type GetByUserFavoriteResponse = Favorite[];

export type PostFavoriteRequest = Favorite;
export type PostFavoriteResponse = { idUser?: number; idProduct?: number };

export type DeleteFavoriteRequest = Favorite;
export type DeleteFavoriteResponse = boolean;

export const favoriteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getPost: builder.query<Favorite, { id: number }>({
    //   query: ({ id }) => `/post/${id}`,
    // }),

    // favoritesByUser: builder.query<
    //   GetByUserFavoriteResponse,
    //   { req: GetByUserFavoriteRequest }
    // >({
    //   query: ({ req }) => ({
    //     url: `/Favorite/${req.idUser}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Favorite"],
    // }),

    favoriteCreate: builder.mutation<PostFavoriteResponse, PostFavoriteRequest>(
      {
        query: () => ({
          url: "/Favorites",
          method: "POST",
        }),
        invalidatesTags: ["Favorite"],
      }
    ),
    favoriteDelete: builder.mutation<
      DeleteFavoriteResponse,
      { req: DeleteFavoriteRequest }
    >({
      query: ({ req }) => ({
        url: `/Favorites/${req.idUser}/${req.idProduct}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite"],
    }),
  }),
});

export const {
  // useFavoritesByUserQuery,
  useFavoriteCreateMutation,
  useFavoriteDeleteMutation,
} = favoriteApiSlice;
