import React from "react";
import { Pressable, Text } from "react-native";
import { inputStyles } from "../styles/homeStyle";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

export const Btn = ({title, handleOnPress}) =>{

  const renderButton = (title) => {
    if(title=='delete'){
      return <AntDesign name="delete" size={15} color="red" />
    }
    else if(title=='edit'){
      return <AntDesign name="edit" size={15} color="green" />
    }
    else if(title=='Login'){
      return  <Entypo name="login" size={30} color="white" />
    }
    else if(title=='Logout'){
     return <AntDesign name="unlock" size={15} color="white" />
    }
    else if(title=='add'){
      return <MaterialIcons name="note-add" size={15} color="white" />
    }
    else if(title=='deleteAll'){
      return <AntDesign name="deleteuser" size={15} color="white" />
    }
    else{
      return <Text style={{color:'white'}}>{title}</Text>
    }
  }

  return(
    
    <Pressable onPress={() => handleOnPress()} style={inputStyles.button}>
    {renderButton(title)}
  </Pressable>
  )
}
