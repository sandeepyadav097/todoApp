import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Keyboard,
  Alert
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { inputStyles } from '../styles/homeStyle';
import { Btn } from './Button';

export const AddTask = ({addTodo,}) => {
  const [text, onChangeText] = React.useState('');

  // Input Component for Adding Todo. Show alert for invalid strings and uses Current Date for ID.
  const handleAddTodo = () => {
    if(text.trim().length > 0){
      Keyboard.dismiss();
      const now = Date.now().toString();
      const newTodo = {};
      newTodo.id = now;
      newTodo.text = text;
      addTodo(newTodo)
      onChangeText("")
    } else{
      Alert.alert( "Invalid Input",
      "Todo cannot be empty",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ])
  }
  }


  // Text Input for Add Todo and Custom Button
  return (
    <View style={inputStyles.inputView}>
      <TextInput
        style={inputStyles.inputField}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add Todo"
        placeholderTextColor="#999" 
        keyboardType="default"
      />

      <Btn handleOnPress={handleAddTodo} title="add" />
    </View>
  );
};

