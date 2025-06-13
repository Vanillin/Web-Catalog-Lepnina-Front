import { apiSlice } from "./apiSlice";
import { PictureFile } from "../models/pictureFile";

export type PostFavoriteRequest = { idPicture?: number };
export type PostFavoriteResponse = PictureFile;

export const pictureFileApiSlices = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    pictureFileGet: builder.query<
      PostFavoriteResponse,
      { req: PostFavoriteRequest }
    >({
      query: ({ req }) => ({
        url: `PictureFile/${req.idPicture}/meta`,
        method: "GET",
      }),
      providesTags: ["PictureFile"],
    }),
  }),
});

export const { usePictureFileGetQuery } = pictureFileApiSlices;
