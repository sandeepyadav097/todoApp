import React, {useContext, useEffect, useState} from 'react';
import { Text, View, FlatList, Alert} from 'react-native';
import {StorageContext} from '../../App';
import {Btn} from '../components/Button';
import {AddTask} from '../components/Input';
import Task from '../components/Tasks';
import * as helpers from '../helper/helper';
import {homeStyle} from '../styles/homeStyle';
import { Entypo } from '@expo/vector-icons';

const HomePage = props => {
  const [todos, setTodos] = useState([]);
  const storage = useContext(StorageContext);

  useEffect(() => {
    const allTodos = helpers.getAllData(storage);
    setTodos(allTodos);
  }, []);

  const addTodo = newTodo => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    helpers.updateSavedStorage(storage, newTodos);
  };

  const deleteTodo = removeTodo => {
    const filteredData = todos.filter(todo => todo != removeTodo);
    setTodos(filteredData);
    helpers.updateSavedStorage(storage, filteredData);
  };

  const editTodo = data => {
    console.log(data);
    const updated = todos.map(todo => {
      if (todo.id == data.id) {
        return {id: data.id, text: data.text};
      }
      return todo;
    });
    helpers.updateSavedStorage(storage, updated);
  };

  const clearAll = () => {
    Alert.alert( "Warning",
        "This action is not reversible.\nThis will delete all saved todos.",
        [
          { text: "Cancel" },
          { text: "OK", onPress: () => {setTodos([])
            helpers.deleteAll(storage);} },
        ])
    
  }

  const renderItem = ({item}) => {
    return (
      <Task
        key={item.id}
        data={item}
        deleteTodo={deleteTodo}
        editTodo={editTodo}></Task>
    );
  };

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
    </View>
  );
};
export default HomePage;
