import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   videoHistory: [],
   videoId: null
}

const videosSlice = createSlice({
   name: 'videos',
   initialState,
   reducers: {
      setVideoHistory: (state, action) => {
         state.videoHistory.push(action.payload)
      },
      setVideoId: (state, action) => {
         state.videoId = action.payload;
      }
   },
});

export const {
   setVideoHistory,
   setVideoId
} = videosSlice.actions;
export default videosSlice.reducer;
