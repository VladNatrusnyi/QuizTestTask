import React, { useState } from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import axios from "axios";

export const URLInputScreen = () => {
  const navigation = useNavigation();

  const [url, setUrl] = useState('');

  const handleInputChange = (text) => {
    setUrl(text);
  };

  const handleValidation = async () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (urlRegex.test(url)) {
      try {
        const response = await axios.head(url);
        if (response.status !== 200) {
          navigation.navigate('QuizStack')
        } else {
          navigation.navigate('Web page demonstration', url)
        }
      } catch (error) {
        navigation.navigate('QuizStack')
      }
    } else {
      Alert.alert('Помилка', 'Будь ласка, введіть дійсну URL адресу.');
    }
  };

  const handleClear = () => {
    setUrl('');
  };

  return (
    <View style={styles.container}>
      <View>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}
          placeholder="Enter the URL address"
          value={url}
          onChangeText={handleInputChange}
        />
        <View style={{marginBottom: 20,}}>
          <Button  title="View page" onPress={handleValidation} />
        </View>

        <Button  title="Clear the input field" onPress={handleClear} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  btn: {
    marginVertical: 100
  }
});

