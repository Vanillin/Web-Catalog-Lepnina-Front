import { apiSlice } from "./apiSlice";
import { User } from "../models/user";

export type UserInfoRequest = any;
export type UserInfoResponse = User;

export type UpdateUserRequest = User;
export type UpdateUserResponse = boolean;

export type DeleteUserRequest = { id?: number };
export type DeleteUserResponse = boolean;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query<UserInfoResponse, UserInfoRequest>({
      query: () => ({
        url: "/User/userInfo",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    userUpdate: builder.mutation<UpdateUserResponse, UpdateUserRequest>({
      query: () => ({
        url: "/User",
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),
    userDelete: builder.mutation<DeleteUserResponse, DeleteUserRequest>({
      query: () => ({
        url: "/User",
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUserInfoQuery,
  useUserUpdateMutation,
  useUserDeleteMutation,
} = userApiSlice;
