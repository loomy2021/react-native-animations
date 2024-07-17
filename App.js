import {s} from "./App.style";
import {  Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";


export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={s.container} >

            <View style={s.square}></View>

        </SafeAreaView>
      </SafeAreaProvider>


  );
}

