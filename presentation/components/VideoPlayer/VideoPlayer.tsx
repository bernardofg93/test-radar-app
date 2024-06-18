import YoutubePlayer from "react-native-youtube-iframe";
import useVideoController from "../../view-controllers/useVideoController.ts";

const VideoPlayer = ({id, playerRef}) => {
   const {
      playing,
      onStateChange,
   } = useVideoController();

   return (
         <YoutubePlayer
            ref={playerRef}
            height={250}
            play={playing}
            videoId={id}
            onChangeState={onStateChange}
         />
   )
}
export default VideoPlayer;
