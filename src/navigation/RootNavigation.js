import {NavigationContainer} from "@react-navigation/native";

import { createStackNavigator } from '@react-navigation/stack';
import {CheckLinkStack} from "./CheckLinkStack";
import {QuizStack} from "./QuizStack";
import {StyleSheet} from "react-native";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CheckLinkStack"
        name={"Root"}
        screenOptions={{
          cardStyle: styles.container,
          headerShown: false,
        }}
      >
        <Stack.Screen name="CheckLinkStack" component={CheckLinkStack} />
        <Stack.Screen name="QuizStack" component={QuizStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
  },
});
