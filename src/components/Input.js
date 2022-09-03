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

      {/* <Pressable onPress={handleAddTodo} style={inputStyles.button}>
        <Text style={{color:'white'}}>Add Todo</Text>
      </Pressable> */}
    </View>
  );
};

