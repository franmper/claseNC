import React, {useEffect} from "react";
import { View, Text, AppState, Button } from "react-native";
import NetInfo from '@react-native-community/netinfo';

const Home = ({navigation}) => {

  // useEffect(() => {
  //   AppState.addEventListener('change', (nextState) => {
  //     console.log(nextState)
  //   })
  //   console.log(AppState.currentState)
  //   return AppState.removeEventListener('change', (nextState) => {
  //     console.log(nextState)
  //   })
  // }, [AppState])

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
      <Button title="Ir a Camera" onPress={() => navigation.navigate('Camera')} />
    </View>
  );
};
export default Home;
