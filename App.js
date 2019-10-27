import React from 'react';
import {StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtilte';
import Input from './app/components/Input';
import Listitem from './app/components/Listitem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      todos:[]
  }
  }
  //redering: react가 기본적으로 화면에 보여주는것(다른말로 mount)
  componentWillMount(){ //component가 화면에 보여지기 전에 data를 가져오겠다.
    this.getData()
  }
  storeData=() =>{
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  }

  getData=() =>{
    AsyncStorage.getItem('@todo:state').then((state)=>{
      if(state !== null){
        this.setState(JSON.parse(state));//받아온 state가 string이니까 object형식으로 바꿔줌
      }
      })
  }

  _makeTodoItem = ({item, index})=>{
    return (
      <Listitem 
      name = {item.title}
      iscomplete = {item.iscomplete}
      changecomplete = {() =>{ //익명함수에 화살표함수임
        const newTodo = [...this.state.todos]; //지금 가지고 있는 todoe를 새로운 todo에 넣어줘라
        newTodo[index].iscomplete = !newTodo[index].iscomplete
        this.setState({todos:newTodo}, this.storeData)
      }}
      deleteItem = {() =>{ 
        const newTodo = [...this.state.todos]; //지금까지의 목록을 모두 newtodo에 저장
        newTodo.splice(index,1) //??
        this.setState({todos:newTodo}, this.storeData) //삭제된 상태의 리스트를 현재 상태에 저장
      }} />
    );
  }
  _changeText=(value) =>{
    this.setState({inputValue:value});
  }
  _addTodoIem=() =>{
    if(this.state.inputValue !== ""){
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue, iscomplete : false}; //이 todo는 super(props)의 todo로 들어감

      this.setState({
        inputValue:'', //input창 새로고침
        todos : prevTodo.concat(newTodo) //concat 원래있던 리스트에 새로운 리스트 이어붙임
      }, this.storeData);
    }
  }
  render(){
  return (
    <View style={styles.container} >
      <View style={styles.headercenter}>
       <Header/>
       </View>
       <View style={styles.subtitleposition}>
         <Subtitle title="해야할 일" />
         <Input 
         value={this.state.inputValue}
         changeText = {this._changeText}
         addTodoItem = {this._addTodoIem}/>
       </View>
       <View style={styles.subtitleposition}>
         <Subtitle title="해야 할 일 목록" />
         
        
         <FlatList 
          data = {this.state.todos}
          renderItem = {this._makeTodoItem}
          keyExtractor = {(item, index)=>{return '$(index)'}}/>
        
           </View>
       </View>
    
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex: 1, //view라는 컴포넌트의 위치??
    backgroundColor: '#fff',   
  },
  headercenter:{
    alignItems:"center",
  },
  subtitleposition:{
    marginLeft:50,
  }
});