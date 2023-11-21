import {StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {WebDemonstrationScreen} from "../screens/WebDemonstrationScreen";
import {URLInputScreen} from "../screens/URLInputScreen";


const Stack = createStackNavigator();

export const CheckLinkStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="URLInputScreen"
        screenOptions={{
          cardStyle: styles.container,
          // headerShown: false,
        }}>

        <Stack.Screen name="Checking the link" component={URLInputScreen} />
        <Stack.Screen name="Web page demonstration" component={WebDemonstrationScreen} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
