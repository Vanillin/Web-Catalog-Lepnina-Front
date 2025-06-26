import { apiSlice } from "./apiSlice";
import { Section } from "../../api/models/section";

export type GetAllSectionRequest = any;
export type GetAllSectionResponse = Section[];

export type CreateSectionRequest = { name?: string };
export type CreateSectionResponse = { id?: number };

export type UpdateSectionRequest = Section;
export type UpdateSectionResponse = boolean;

export type DeleteSectionRequest = { id?: number };
export type DeleteSectionResponse = boolean;

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sectionsAll: builder.query<GetAllSectionResponse, GetAllSectionRequest>({
      query: () => ({
        url: "/Section/all",
        method: "GET",
      }),
      providesTags: ["Section"],
    }),
    sectionsCreate: builder.mutation<
      CreateSectionResponse,
      CreateSectionRequest
    >({
      query: (args) => ({
        url: "/Section",
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["Section"],
    }),
    sectionsUpdate: builder.mutation<
      UpdateSectionResponse,
      UpdateSectionRequest
    >({
      query: (args) => ({
        url: "/Section",
        method: "PUT",
        body: args,
      }),
      invalidatesTags: ["Section"],
    }),
    sectionsDelete: builder.mutation<
      DeleteSectionResponse,
      DeleteSectionRequest
    >({
      query: (args) => ({
        url: "/Section",
        method: "DELETE",
        body: args,
      }),
      invalidatesTags: ["Section"],
    }),
  }),
});

export const {
  useSectionsAllQuery,
  useSectionsCreateMutation,
  useSectionsUpdateMutation,
  useSectionsDeleteMutation,
} = productApiSlice;
