import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


export default function Input({value, changeText, addTodoItem}) {
  return (
     <TextInput
        value={value}
        onChangeText={changeText}
        onEndEditing={addTodoItem}
        style={StyleSheet.input}
        placeholder={"할일을 입력해 주세요"}
        maxlength={30}
        returnKeyType="done"/>
    
  )
};

const styles = StyleSheet.create({
 input:{
    fontSize : 17,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:20,
  
  },
});
