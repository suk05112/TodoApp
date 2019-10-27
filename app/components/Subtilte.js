import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export default function Subtitle({title}) {
  return (
    <View>
        <Text style = {styles.subtiltetext}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    subtiltetext:{
      fontSize : 20,
      fontWeight: 'bold',
      color: '#3f4e66',
      
    },
  });