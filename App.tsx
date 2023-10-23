/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import WatchListScreen from "./src/screens/WatchListScreen";
import GraphScreen from "./src/screens/GraphScreen";
import TabNav from "./src/navigators/TabNav";
import {NativeBaseProvider} from "native-base";



const Stack = createNativeStackNavigator()
function App(): JSX.Element {

  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="TabNav" component={TabNav} ></Stack.Screen>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="WatchList" component={WatchListScreen}></Stack.Screen>
            <Stack.Screen name="Graphs" component={GraphScreen}></Stack.Screen>
          </Stack.Navigator>

        </NavigationContainer>
      </NativeBaseProvider>

  );
}



export default App;
