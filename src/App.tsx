import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.jsx";
import Details from "./screens/Detail.jsx";
import Basic from "./screens/Basic.jsx";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Trending Products"
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Product details"
          }}
        />
        <Stack.Screen
          name="Basic"
          component={Basic}
          options={{
            title: "React Native Basics"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;