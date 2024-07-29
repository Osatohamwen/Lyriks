import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nettalez.com/myReq/',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'theminent');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    
    // Adjusted
    getTopCharts: builder.query({
      query: () => '',
    }),
    getArtistDetails: builder.query({ query: (artistId) => `artists/?artist_id=${artistId}`}),
    getSongDetails: builder.query({ query: ({ songid }) => `songData/?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/?track_id=${songid}` }),
  }),
});


export const { 
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;