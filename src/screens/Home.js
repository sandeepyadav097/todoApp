import React, {useEffect, useState} from 'react';
import {View, Button, ScrollView} from 'react-native';
import {AddTask} from '../components/Input';
import Task from '../components/Tasks';
import {MMKV} from 'react-native-mmkv';
import * as helpers from '../helper/helper';
import {homeStyle} from '../styles/homeStyle';
export const storage = new MMKV();

const Home = props => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  //  getSavedTodos();
  }, []);

//   const getSavedTodos = () => {
//     const allTodos = helpers.getAllData();
//     setTodos(allTodos);
//   };

  const addTodo = newTodo => {
    const cur = Date.now().toString();
    const newData = {[cur]: newTodo};
    const newTodos = [...todos];
    newTodos.push(newData);
    setTodos(newTodos);
    helpers.addToStorage(newTodo);
  };

  useEffect(() => {console.log(todos)},[todos])
  const deleteTodo = data => {
    const filteredData = todos.filter(todo => Object.keys(todo)[0] != data[0]);
    console.log(filteredData)
    setTodos(filteredData);
    const key = data[0].toString();
    //storage.delete(key);
    //getSavedTodos();
  };

  const editData = data => {
    helpers.updateTask(data);
    //getSavedTodos();
  };

  return (
    <View style={homeStyle.container}>
      <View>
        <Button title="logout" onPress={() => props.logout()} />
        <Button
          title="hello"
          onPress={() => {
            storage.clearAll();
            getSavedTodos();
          }}
        />
      </View>

      <View style={{paddingHorizontal: 10}}>
        <ScrollView style={homeStyle.list}>
          {todos.map((todo, index) => {
            return (
              <View>
                {console.log(todo)}
                <Task
                  key={index}
                  data={todo}
                  deleteTodo={deleteTodo}
                  sendData={editData}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>

    {/* <ScrollView style={homeStyle.list}>
        {todos.map(todo => {
          return (
            <Task
              key={todo.id}
              data={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}></Task>
          );
        })}
      </ScrollView> */}

      
            {/* <Button
            //   title="Open Security Settings"
            //   onPress={() => {
            //     Linking.sendIntent('android.settings.SECURITY_SETTINGS');
            //   }} */}
      <View style={homeStyle.footer}>
        <AddTask addTodo={addTodo}/>
      </View>
    </View>

    
  );
};

export default Home;
