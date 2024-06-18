import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./api.ts";

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: baseQuery,
   endpoints(builder) {
      return {
         fetchVideos: builder.query({
            query: () => ({
               url: '/videos?part=snippet,player&chart=mostPopular&maxResults=25',
            })
         })
      }
   }
})
export const {
   useFetchVideosQuery
} = apiSlice;
