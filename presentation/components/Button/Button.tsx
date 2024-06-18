import {Text, TouchableHighlight} from "react-native";
import {useCallback} from "react";
import styles from "./styles.ts";

const Button = ({title, onPress}) => {

   const handlePress = useCallback(() => {
      onPress()
   }, [onPress])

   return (
      <TouchableHighlight
         onPress={() => handlePress()}
         style={styles.container}
      >
         <Text style={styles.title}>
            {title}
         </Text>
      </TouchableHighlight>
   )
}
export default Button;

