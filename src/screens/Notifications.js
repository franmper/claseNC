import React, { useRef } from 'react'
import { View, Text, Platform, Button } from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'
import { useEffect } from 'react/cjs/react.development'

Notifications.setNotificationHandler({
  handlerNotifications: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

const NotificationsScreen = () => {
  const notificationsListener = useRef();
  const responseListener = useRef()

  useEffect(() => {
    registerNotification().then(token => console.log(token))

    notificationsListener.current = Notifications.addNotificationReceivedListener(notification => console.log(notification))
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response))

    return () => {
      Notifications.removeNotificationSubscription(notificationsListener)
      Notifications.removeNotificationSubscription(responseListener)
    }
  }, [])

  const registerNotification = async () => {
    let token;
    if(Constants.isDevice) {
      const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      console.log(existingStatus)
      let finalStatus = existingStatus;
      if(existingStatus !== 'granted') {
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        finalStatus = status;
      }
      if(finalStatus !== 'granted'){
        console.log('No se pueden enviar notificaciones')
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log(token);
    } else {
      return;
    }
    if(Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('defaul', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 100]
      })
    }

    return token;
  }

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Titulo Notificacion",
        body: "Decripción de la notificación",
        data: {data: 'data'}
      },
      trigger: { seconds: 2, repeats: false}
    })
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home</Text>
      <Button title="Notificacion" onPress={() => scheduleNotification()}/>
    </View>
  )
}

export default NotificationsScreen
