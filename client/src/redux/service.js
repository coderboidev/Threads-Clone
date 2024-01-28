import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addMyInfo,
  addSingle,
  addToAllPost,
  addUser,
  deleteThePost,
} from "./slice";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://threads-clone-backend-wl9u.onrender.com/api/",
    credentials: "include",
  }),
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post", "User", "Me"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: "signin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
    userDetails: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "User", id }],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addUser(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    myInfo: builder.query({
      query: () => ({
        url: `me`,
        method: "GET",
      }),
      providesTags: ["Me"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addMyInfo(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    logoutMe: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      invalidatesTags: ["Me"],
    }),
    searchUsers: builder.query({
      query: (query) => ({
        url: `users/search/${query}`,
        method: "GET",
      }),
    }),
    followUser: builder.mutation({
      query: (id) => ({
        url: `user/follow/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addSingle(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    allPost: builder.query({
      query: (page) => ({
        url: `post?page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, args) => {
        return result
          ? [
              ...result.posts.map(({ _id }) => ({ type: "Post", id: _id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }];
      },
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addToAllPost(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(deleteThePost());
        } catch (err) {
          console.log(err);
        }
      },
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `post/like/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    singlePost: builder.query({
      query: (id) => ({
        url: `post/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    addComment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    repost: builder.mutation({
      query: (id) => ({
        url: `repost/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),
    deleteComment: builder.mutation({
      query: ({ postId, id }) => ({
        url: `comment/${postId}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Post", id: postId },
      ],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useAddPostMutation,
  useAllPostQuery,
  useRepostMutation,
  useSinglePostQuery,
  useUpdateProfileMutation,
  useDeleteCommentMutation,
  useDeletePostMutation,
  useFollowUserMutation,
  useLikePostMutation,
  useLazySearchUsersQuery,
  useLoginMutation,
  useSigninMutation,
  useUserDetailsQuery,
  useMyInfoQuery,
  useLogoutMeMutation,
} = serviceApi;
