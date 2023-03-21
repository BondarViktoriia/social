import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
