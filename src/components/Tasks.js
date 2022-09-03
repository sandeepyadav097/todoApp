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


const Task = ({data, deleteTodo, editTodo}) => {
   const [showModal, setShowModal] = useState(false)
   const [todo, setTodo] = useState(data.text)
    useEffect(() => {
        console.log("bc",todo)
    },[todo])

  
  const handlePress = () => {

    if(todo.trim().length > 0){
    Keyboard.dismiss();
    setShowModal(!showModal);
    const updatedObj = {};
    updatedObj.id=data.id
    updatedObj.text = todo;
    console.log(updatedObj)
    editTodo(updatedObj);
    }else{
        setTodo(data.text)
        Alert.alert( "Invalid Input",
        "Todo cannot be empty",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
    }
  };


  return (
    <View style={taskStyles.taskStyling}>
      <View style={taskStyles.left}>
        <Text style={taskStyles.text}>{todo}</Text>
      </View>

      <View style={taskStyles.right}>
        <Btn  title="delete" handleOnPress={() => {deleteTodo(data)}} />
        <Btn  title="edit" handleOnPress={ () => setShowModal(true)} />
       
      </View>

      {showModal && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
              setTodo(data.text)  
              setShowModal(!showModal);
            }}>
            <View style={taskStyles.centeredView}>
              <View >
                <Text style={taskStyles.modalText}>Update Todo</Text>

               
                <View style={inputStyles.inputView}>
      <TextInput
        style={inputStyles.inputField}
        onChangeText={setTodo}
        value={todo}
        placeholder="Update Todo"
        placeholderTextColor="#999" 
        keyboardType="default"
      />

      <Pressable onPress={handlePress} style={inputStyles.button}>
        <Text style={{color:'white'}}>Update Todo</Text>
      </Pressable>
      {/* <Button title="Add Todo" /> */}
    </View>


                {/* <Button title="Update" onPress={handlePress} /> */}
                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handlePress}>
                <Text style={taskStyles.textStyle}>Update</Text>
              </Pressable> */}
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Task;
