import {useCallback, useRef, useState} from "react";
import {captureRef} from "react-native-view-shot";
import RNFS from 'react-native-fs';
import {Alert, PermissionsAndroid} from "react-native";
import RecordScreen from 'react-native-record-screen';
import Video, {VideoRef} from 'react-native-video';
import useVideosViewModel from "../view-models/useVideosViewModel.ts";
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const useVideoController = () => {

   const [playing, setPlaying] = useState<boolean>(false);
   const [recording, setRecording] = useState<boolean>(false);
   const [uri, setUri] = useState<string>('');

   const playerRef = useRef<any>(null);
   const viewRef = useRef<any>(null);
   const videoRef = useRef<VideoRef>(null);

   const {videoHistory, videoId, setVideoHistory} = useVideosViewModel();

   const requestPermissions = async () => {
      return PermissionsAndroid.requestMultiple([
         PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
         PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
         (statuses) =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
   };

   const saveToGallery = async (base64Image) => {
      const fileName = `screenshot_${Date.now()}.png`;
      const filePath = `${RNFS.CachesDirectoryPath}/${fileName}`;
      await RNFS.writeFile(filePath, base64Image, 'base64');

      try {
         await CameraRoll.saveAsset(filePath, {type: 'photo', album: 'MyAppScreenshots'});
         Alert.alert('Screenshot saved to gallery!');
      } catch (e) {
         console.log("Error to save picture", e);
      }
   }

   const onCaptureScreen = async () => {
      requestPermissions();
      try {
         const uri = await captureRef(viewRef);
         RNFS.readFile(uri, 'base64').then(base64Image => {
            saveToGallery(base64Image);
         });
      } catch (e) {
         console.error('Error Capture', e);
      }
   }

   const onStateChange = useCallback((state: any) => {
      playerRef.current?.getCurrentTime().then(
         currentTime => console.log("currenenene", {currentTime})
      );
      if (state === "ended") {
         setPlaying(false);
         Alert.alert("video has finished playing!");
      }
   }, []);

   const onStartRecord = async () => {
      let result = await playerRef.current.getDuration();
      let recordMinuteTen = result - 600;
      let currentTime = await playerRef.current?.getCurrentTime();

      if (currentTime >= recordMinuteTen) {
         await RecordScreen.startRecording({
            mic: false,
            fps: 30,
            bitrate: 1024000,
         }).catch((error: any) => {
            console.warn(error);
            setRecording(false);
            setUri('');
         });

      } else {
         Alert.alert("The video can only be recorded from the last ten minutes");
      }
   }

   const onStopRecord = async () => {
      const res = await RecordScreen.stopRecording().catch((error) =>
         console.warn(error)
      );
      if (res) {
         const url = res.result.outputURL;
         setUri(url);

         let videoHistory = {
            videoId: videoId,
            url: url
         }
         setVideoHistory(videoHistory)
      }
   }

   return {
      onStartRecord,
      onStopRecord,
      onCaptureScreen,
      onStateChange,
      playing,
      viewRef,
      playerRef,
      recording,
      uri,
      Video,
      videoRef
   }
}
export default useVideoController;
