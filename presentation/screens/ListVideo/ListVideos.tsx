import {FlatList, Text, View, Image, Pressable} from "react-native";
import useVideoPlayerController from "../../view-controllers/useVideoPlayerController.ts";
import styles from "./styles.ts";

const ListVideos = () => {
   const {data, onViewVideo} = useVideoPlayerController();
   return (
      <FlatList
         contentContainerStyle={styles.list}
         data={data?.items}
         renderItem={({item, index}) => (
            <View key={index}>
               <Pressable onPress={() => onViewVideo(item?.id)}>
                  <Image
                     source={{uri: item?.snippet?.thumbnails?.maxres?.url}}
                     height={250}
                     width='100%'
                     resizeMode="contain"
                  />
                  <Text style={styles.title}>{item?.snippet?.title}</Text>
                  <Text>{item?.snippet?.description}</Text>
               </Pressable>
            </View>
         )}
      />
   )
}
export default ListVideos;
