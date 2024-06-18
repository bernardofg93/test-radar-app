import useVideosViewModel from "../view-models/useVideosViewModel.ts";

const useHistoryVideos = () => {
   const {videoHistory} = useVideosViewModel();

   return {
      videoHistory
   }
}
export default useHistoryVideos;
