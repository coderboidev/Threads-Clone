import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: "signin",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    userDetails: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
    allUsers: builder.query({
      query: ({ page }) => ({
        url: `users?page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, args) => {
        result
          ? [
              ...result.users.map(({ _id }) => ({ type: "User", id: _id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }];
      },
    }),
    followUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `user/follow/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    allPost: builder.query({
      query: ({ page }) => ({
        url: `post?page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, args) => {
        result
          ? [
              ...result.posts.map(({ _id }) => ({ type: "Post", id: _id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }];
      },
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    likePost: builder.mutation({
      query: ({ id }) => ({
        url: `post/like/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    addComment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
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
  }),
});

export const {
  useAddCommentMutation,
  useAddPostMutation,
  useAllPostQuery,
  useAllUsersQuery,
  useDeleteCommentMutation,
  useDeletePostMutation,
  useFollowUserMutation,
  useLikePostMutation,
  useLoginMutation,
  useSigninMutation,
  useUserDetailsQuery,
} = serviceApi;
