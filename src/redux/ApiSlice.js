import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mcs-backend-96pw.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => "/tasks",
    }),
    getSingleTask: builder.query({
      query: (id) => `/task/${id}`,
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/add-task",
        method: "POST",
        body: data,
      }),
    }),
    editTask: builder.mutation({
      query: ({ data, id }) => ({
        url: `/update-task/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    markComplete: builder.mutation({
      query: (id) => ({
        url: `/mark-complete/${id}`,
        method: "PUT",
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/delete-task/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTaskQuery,
  useGetSingleTaskQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useMarkCompleteMutation,
  useDeleteTaskMutation,
} = api;
