import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.translations = {
  es: {home: 'Inicio'},
  en: {home: 'Home'}
}

i18n.locale = Localization.locale;

i18n.fallbacks = true;

const LocalizationScreen = () => {

  useEffect(() => {
    console.log(Localization.locale)
    console.log(i18n.t('home'))
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{i18n.t('home')}</Text>
    </View>
  )
}

export default LocalizationScreen
