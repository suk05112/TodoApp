import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function ListItem({name, iscomplete, changecomplete, deleteItem}) {
  return (
    <View style={styles.listitembox}>
        <View style={styles.markrow} >
            <TouchableOpacity onPress={changecomplete}> 
                <AntDesign name={iscomplete? "checkcircle":"frowno"} size={20}  style={styles.checkmargin} />
            </TouchableOpacity>

            <Text style={styles.item}>{name}</Text>
        </View>
        <TouchableOpacity onPress={deleteItem}>
            <AntDesign name="close" size={20} />
        </TouchableOpacity>
    </View>
  );l
};

const{width,height}=Dimensions.get('window')
const styles = StyleSheet.create({
    listitembox:{
       borderBottomWidth:1, //아래쪽에만 선 만들어 주기
       padding: 5,
       marginTop:10,
       width: width-100, //맡의 선을 기기의 가로길이보다 60만큼 작게해라 
       flexDirection:"row", //아이콘이랑 목록이름 가로 정렬(열->행)
       alignItems:"center",//세로정렬
       justifyContent:"space-between"//사이사이에 스페이스바 넣어줬다고 생각
     },
     item:{
         fontSize:20,
         fontWeight:"bold",
     },
     markrow:{
         flexDirection:"row",//체크박스 목록아이템 옆에 붙이기
     },
     checkmargin:{
         marginRight: 10,  //체크박스 옆 공간 만들어주기
     }
   });