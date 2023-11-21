import { View, StyleSheet } from 'react-native';
import {Quiz} from "../components/Quiz";
import {useNavigation} from "@react-navigation/native";
export const QuizScreen = () => {

  return (
    <View style={styles.container}>
      <Quiz />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
