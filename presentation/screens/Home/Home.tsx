import {View} from "react-native";
import ListVideos from "../ListVideo/ListVideos.tsx";
import styles from "./styles.ts";

const Home = () => {
   return (
      <View style={styles.container}>
          <ListVideos />
      </View>
   )
}
export default Home;
