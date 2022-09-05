import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
} from 'react-native';
import {inputStyles, taskStyles} from '../styles/homeStyle';
import { Btn } from './Button';


const Task = ({data, deleteTodo}) => {
   
  return (
    <View style={taskStyles.taskStyling}>
      <View style={taskStyles.left}>
        <Text style={taskStyles.text}>{data.text}</Text>
      </View>

      <View style={taskStyles.right}>
        <Btn  title="delete" handleOnPress={() => {deleteTodo(data)}} /> 
      </View>
    </View>
  );
};

export default Task;
