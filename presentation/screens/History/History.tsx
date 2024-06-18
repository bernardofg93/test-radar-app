import {FlatList, View} from "react-native";
import useHistoryVideos from "../../view-controllers/useHistoryVideos.ts";
import useVideoController from "../../view-controllers/useVideoController.ts";
import styles from "./styles.ts";

const History = () => {

  const { videoHistory } = useHistoryVideos();
  const { Video, videoRef } = useVideoController();

   return (
      <FlatList
       contentContainerStyle={styles.container}
       data={videoHistory}
       renderItem={({item, index}) => (
          <View key={index} style={styles.boxVideo}>
             <Video
                source={{uri: item.url}}
                ref={videoRef}
                style={{height: 300}}
                controls={true}
             />
          </View>
       )}
      />
   )
}
export default History;
