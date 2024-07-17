import {s} from "./App.style";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { Part2 } from "./pages/Part2/Part2";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Text, TouchableOpacity} from "react-native";

const Stack = createNativeStackNavigator();
const navTheme = {
    colors: {
         //background: "transparent",
         backgroundColor: "red"
    }
}

export default function App() {
    return (
        <NavigationContainer theme={navTheme}  >
        <SafeAreaProvider >
        <SafeAreaView style={[s.container]}>
            <Stack.Navigator initialRouteName={Home} screenOptions={{headerShown: false, }}>
            <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Part2" component={Part2} />

            </Stack.Navigator>
        </SafeAreaView>
            </SafeAreaProvider>
        </NavigationContainer>

    );
}



