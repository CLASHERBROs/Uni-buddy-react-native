import React,{useState} from 'react'
import {Text,View,StyleSheet,FlatList,TextInput} from 'react-native'
import { AsyncStorage } from 'react-native';
const NoteScreen=({navigation})=>{
  const title = navigation.state.params.itemId

    return(<View>

        <Text style={styles.heading}>{title}</Text>
        <TextInput style={styles.input} placeholder="enter todo" />
        </View>
    )
}
const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        textDecorationLine:"underline",
        alignSelf:"center",

    },
    input:{

    borderRadius:10,
  backgroundColor:"red",
    height:600,
    width:500,


    }
})

export default NoteScreen