import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,FlatList,TextInput,AsyncStorage,Button} from 'react-native'
const NoteScreen=({navigation})=>{
  const title = navigation.state.params.itemId
  const [text,setText] = useState("")
  const save = async()=>{

  try{await AsyncStorage.setItem(title,text)
  
  
  } catch(err){
    alert(err)
  }
  }
  
const load = async()=>{
  try
  {
   let jsonValue = await AsyncStorage.getItem(title)
   if(jsonValue!=null){
    setText(jsonValue)
   }
  
  } catch(err){
    alert(err)
  }
  finally{
    
  }
  }
  
  useEffect(()=>{
    load();
  },[])
  const remove = async()=>{

    setText("")
    try{await AsyncStorage.removeItem(title)}
  catch(err){
    alert(error)
  }
  }
    return(<View>

        <Text style={styles.heading}>{title}</Text>
        <TextInput ed style={styles.input} placeholder="enter todo"
        value={text}
onEndEditing={()=>{
save();
  }
}
onChangeText={(newText)=>setText(newText)}
 />
 <Button title="clear" onPress={()=>{
remove();
}} />
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