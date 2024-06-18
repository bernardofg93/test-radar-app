import {View} from "react-native";
import {VideoPlayer} from "../../components/VideoPlayer";
import useVideoController from "../../view-controllers/useVideoController.ts";
import {Button} from "../../components/Button";
import styles from "./styles.ts";

const Video = ({route}) => {

   const {
      viewRef,
      playerRef,
      onStartRecord,
      onStopRecord,
      onCaptureScreen,
   } = useVideoController();

   const {videoId} = route.params;

   return (
      <View ref={viewRef} collapsable={false} style={styles.container}>
         <VideoPlayer id={videoId} playerRef={playerRef}/>
         <View style={styles.boxButtons}>
            <Button
               title="Start Recording"
               onPress={() => onStartRecord()}
            />
            <Button
               title="Stop Recording"
               onPress={() => onStopRecord()}
            />
            <Button
               title="Capture Screen"
               onPress={() => onCaptureScreen()}
            />
         </View>
      </View>
   )
}
export default Video;
