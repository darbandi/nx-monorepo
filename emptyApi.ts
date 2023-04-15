import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptyApi = createApi({
  baseQuery: fetchBaseQuery({
    cache: 'default',
    baseUrl: 'http://dev.mazdax.tech',
    prepareHeaders: async (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', '*/*');
      return headers;
    },
  }),
  endpoints: () => ({}),
});
