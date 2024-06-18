import useVideosViewModel from "../view-models/useVideosViewModel.ts";
import {useNavigation} from "@react-navigation/native";
import {screenMap} from "../navigation/screenMap.ts";

const useVideoPlayerController = () => {
   const navigation = useNavigation();
   const {data, isError, error, setVideoId} = useVideosViewModel()

   const onViewVideo = (videoId) => {
      setVideoId(videoId);
      navigation.navigate(screenMap.video, {videoId: videoId});
   }

   return {
      data,
      isError,
      error,
      onViewVideo
   }
}
export default useVideoPlayerController;
