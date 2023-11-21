import {StyleSheet, Text, TouchableOpacity} from "react-native";

export const CustomBtn = ({text, disabled = false, onPress, backgroundColor = '#70b9ff' }) => {
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor}}
      disabled={disabled}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
