import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "../screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import Video from "../screens/Video/Video.tsx";
import {screenMap} from "./screenMap.ts";
import {Button} from "react-native";
import {History} from "../screens/History";

const AppContainer = () => {
   const Stack = createStackNavigator();
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name={screenMap.home}
               component={Home}
               options={({navigation}) => ({
                  title: 'List Videos',
                  headerRight: () => (
                     <Button
                        title="History Videos"
                        color="#000"
                        onPress={() => navigation.navigate(screenMap.history)}
                     />
                  ),
                  headerRightContainerStyle: {
                     marginRight: 10
                  }
               })}
            />
            <Stack.Screen
               name={screenMap.video}
               component={Video}
               options={({navigation}) => ({
                  title: 'Video',
                  headerRight: () => (
                     <Button
                        title="History Videos"
                        color="#000"
                        onPress={() => navigation.navigate(screenMap.history)}
                     />
                  ),
                  headerRightContainerStyle: {
                     marginRight: 10
                  }
               })}
            />
            <Stack.Screen
               name={screenMap.history}
               component={History}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
export default AppContainer;


