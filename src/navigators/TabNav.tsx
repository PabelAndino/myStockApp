import React from 'react';
import {StyleSheet, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GraphScreen from "../screens/GraphScreen";
import WatchListScreen from "../screens/WatchListScreen";
import {CircleIcon, FavouriteIcon, InfoIcon} from "native-base";
import {BlurView} from "@react-native-community/blur";

const Tab = createBottomTabNavigator()
const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard:true,
            headerShown:false,
            tabBarStyle:styles.TabStyle,
            tabBarBackground:()=>(
                <BlurView overlayColor="" blurAmount={15} style={styles.BlurBackStyle} />
            )

        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon:({focused,color, size})=>(
                      <CircleIcon size={25} color={focused ? '#10add6':'#ccdcfe'} />
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen name="WatchList" component={WatchListScreen}
                        options={{
                            tabBarIcon:({focused,color, size})=>(
                                <InfoIcon size={25} color={focused ? '#10add6':'#ccdcfe'} />
                            )
                        }}
            ></Tab.Screen>
            <Tab.Screen name="Graphs" component={GraphScreen}
                        options={{
                            tabBarIcon:({focused,color, size})=>(
                                <FavouriteIcon size={25} color={focused ? '#10add6':'#ccdcfe'} />
                            )
                        }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create(({
    TabStyle:{
        height:80,
        position:'absolute',
        backgroundColor:'#1b1b36',
        borderTopWidth:0,
        elevation:0,
        borderTopColor:'transparent'
    },
    BlurBackStyle:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
}))
export default TabNav;