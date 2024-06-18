import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
   list: {
      backgroundColor: '#fff'
   },
   title: {
      color: '#000',
      fontWeight: "bold",
      marginBottom: 10,
      fontSize: 18,
      marginTop: Platform.OS != 'android' ? -8 : -18
   }
})
export default styles;
