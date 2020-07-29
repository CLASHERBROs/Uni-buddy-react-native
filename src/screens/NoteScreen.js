import React,{useState} from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'

const NoteScreen=({navigation})=>{
  const title = navigation.state.params.itemId

    return(<View>

        <Text style={styles.heading}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        textDecorationLine:"underline",
        

    }
})

export default NoteScreen