import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {KEY} from "../../data/constants/constants.ts";

export const baseQuery = fetchBaseQuery({
   baseUrl: 'https://youtube.googleapis.com/youtube/v3',
   prepareHeaders: (headers, {getState}) => {
      headers.set('authorization', `Bearer ${KEY}`)
      return headers
   }
});
