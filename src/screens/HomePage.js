import React, {useContext, useEffect, useState} from 'react';
import { Text, View, FlatList, Alert, Touchable, Modal, Pressable,Keyboard, TouchableOpacity, TextInput} from 'react-native';
import {StorageContext} from '../../App';
import {Btn} from '../components/Button';
import {AddTask} from '../components/Input';
import Task from '../components/Tasks';
import * as helpers from '../helper/helper';
import {homeStyle, taskStyles, inputStyles} from '../styles/homeStyle';
import { Entypo } from '@expo/vector-icons';

const HomePage = props => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setShowModalText] = useState("");
  const [modalId, setModalId] = useState("")  

  const storage = useContext(StorageContext);

  // Fetches saved Todos for localstorage 
  useEffect(() => {
    const allTodos = helpers.getAllData(storage);
    setTodos(allTodos);
  }, []);

  // adds a new todo to storage 
  const addTodo = newTodo => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    helpers.updateSavedStorage(storage, newTodos);
  };

  // deletes a todo and updates storage
  const deleteTodo = removeTodo => {
    const filteredData = todos.filter(todo => todo != removeTodo);
    setTodos(filteredData);
    helpers.updateSavedStorage(storage, filteredData);
  };

  // handles update. Filters a todo and pushes it in the front to emphasize update. 
  // Shows alert for invalid input  
  const handleUpdate = () => {

    if(modalText.trim().length > 0){
        Keyboard.dismiss();
        const newTd = todos.filter(todo => todo.id != modalId);
        newTd.unshift({id:Date.now().toString(), text:modalText})
        setTodos(newTd)  
        editTodo(newTd)
        setShowModal(!showModal)
        }else{
            
            Alert.alert( "Invalid Input",
            "Todo cannot be empty",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ])
        }
     
} 

// saved edited todo to storage
  const editTodo = data => {
    helpers.updateSavedStorage(storage, data);
  };

  // deletes all saved todos
  const clearAll = () => {
    Alert.alert( "Warning",
        "This action is not reversible.\nThis will delete all saved todos.",
        [
          { text: "Cancel" },
          { text: "OK", onPress: () => {setTodos([])
            helpers.deleteAll(storage);} },
        ])
    
  }

  // flat list render helper function
  const renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => { setModalId(item.id); setShowModalText(item.text) ;setShowModal(!showModal) }}>

<Task
        key={item.id}
        data={item}
        deleteTodo={deleteTodo}
        editTodo={editTodo}></Task>
            </TouchableOpacity>
     
    );
  };

  // Components :-
  // 1. - Header with Logout and Delete All button.
  // 2. -  All Todo list with delete Button.
  // 3. - Modal to facilitate editing
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.header}>
        <Text style={homeStyle.headerText}>TODO:</Text> 

        <View style={homeStyle.headerButton}>
        <Btn handleOnPress={props.logout} title="Logout" />
        <Btn handleOnPress={clearAll} title="deleteAll" />

        </View>
      </View>

        {todos.length == 0 && <View style={homeStyle.nothing} ><Entypo name="emoji-sad" size={100} color="black" />
        </View> }
      <FlatList style={homeStyle.list} data={todos} renderItem={renderItem}>
        keyExtractor={item => item.id}
      </FlatList>

     

      <View style={homeStyle.footer}>
        <AddTask addTodo={addTodo} />
      </View>



      {showModal && 
       <TouchableOpacity
       onPress={() => {
         Keyboard.dismiss();
       }}>
       <Modal
         animationType="slide"
         transparent={false}
         visible={showModal}
         onRequestClose={() => {  
           setShowModal(!showModal);
         }}>
         <View style={taskStyles.centeredView}>
           <View >
             <Text style={taskStyles.modalText}>Update Todo</Text>

            
             <View style={inputStyles.inputView}>
   <TextInput
     style={inputStyles.inputField}
     onChangeText={setShowModalText}
     value={modalText}
     placeholder="Update Todo"
     placeholderTextColor="#999" 
     keyboardType="default"
   />

   <Pressable onPress={handleUpdate} style={inputStyles.button}>
     <Text style={{color:'white'}}>Update Todo</Text>
   </Pressable>
 </View>
           </View>
         </View>
       </Modal>
     </TouchableOpacity>}


    </View>
  );
};
export default HomePage;
