import {View, StyleSheet, Button} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {QuizScreen} from "../screens/QuizScreen";
import {AnswersScreen} from "../screens/AnswersScreen";



const Stack = createStackNavigator();
export const QuizStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Quiz"
      screenOptions={{
        cardStyle: styles.container,
        // headerShown: false,
      }}>

      <Stack.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ paddingRight: 10}}>
              <Button
                onPress={() => navigation.navigate('CheckLinkStack')}
                title="to web view part"
              />
            </View>
          ),
        })}
        name="Quiz"
        component={QuizScreen}
      >
      </Stack.Screen>

      <Stack.Screen name="Answers to questions" component={AnswersScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
