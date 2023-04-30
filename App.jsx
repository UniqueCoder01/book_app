import React from "react";
import { StatusBar } from "react-native";
import { colors } from "./src/constant/GlobalcCss";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./src/features/store";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import DetailsSubmition from "./src/screens/DetailsSubmition";
const Stack = createNativeStackNavigator();
function App() {
    return (
        <>
            <Provider store={store}>
                <StatusBar
                    animated={true}
                    backgroundColor={colors.primary}
                    barStyle="dark-content"

                />
                {/* < /> */}
                {/* <RegistrationScreen /> */}
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                    // initialRouteName="Checkout"

                    >
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegistrationScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Checkout" component={CheckoutScreen} />
                        <Stack.Screen name="DetailsSubmition" component={DetailsSubmition} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>

        </>
    );

}
export default App;
