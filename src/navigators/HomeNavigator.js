import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import CameraScreen from '../screens/Camera'
import NotificationsScreen from '../screens/Notifications'
import LocalizationScreen from '../screens/Localization'

const {Navigator, Screen} = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Navigator initialRouteName={"Home"}>
      <Screen name="Home" component={Home} />
      <Screen name="Camera" component={CameraScreen} />
      <Screen name="Notifications" component={NotificationsScreen}/>
      <Screen name="Localization" component={LocalizationScreen} />
    </Navigator>
  )
}

export default HomeNavigator
