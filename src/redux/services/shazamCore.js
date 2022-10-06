import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers) => {
      headers.set("", "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    getTopCharts: builder.query({ query: () => "/charts/world" });
  },
});

export const { useGetTopCharts } = shazamCoreApi;
