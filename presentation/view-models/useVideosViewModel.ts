import {useFetchVideosQuery} from "../store/apiSlice/apiSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {setVideoHistory, setVideoId} from "../store/features/videos-slice.ts";

const useVideosViewModel = () => {
   const dispatch = useDispatch();
   const { videoHistory, videoId } = useSelector(state => state.VideosReducer)
   const {data, isLoading, isFetching, isError, error} = useFetchVideosQuery();

   return {
      data,
      isError,
      error,
      //State
      videoHistory,
      videoId,
      setVideoHistory: (history) => dispatch(setVideoHistory(history)),
      setVideoId: (id) => dispatch(setVideoId(id))
   }
}
export default useVideosViewModel;
