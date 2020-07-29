import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,FlatList,AsyncStorage,Button} from 'react-native'
import Field from "../components/field"
import Tile from "../components/tile"


const HomeScreen = props=>{
    const [subjects,setSubject] = useState("")
 const[list,setList]=useState([])
//  {console.log(props.navigation.navigate)}
 const abc = props.navigation.navigate
const save = async()=>{
  console.log(list)
try{await AsyncStorage.setItem("Subjects",JSON.stringify(list))


} catch(err){
  alert(err)
}
}
// const remove = async()=>{
//   try{await AsyncStorage.removeItem("List")}
// catch(err){
//   alert(error)
// }
// }

const load = async()=>{
  try
  {
   let jsonValue = await AsyncStorage.getItem("Subjects")
   if(jsonValue!=null){
    setList(JSON.parse(jsonValue))
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
 return(<View>

<Field subjects={subjects} onSubjectChange={newSubject=>setSubject(newSubject)} listChange={newMember=>setList(list.concat(newMember))}
 />



        <Text>Home Screen subjects will be displayed here</Text>

        <FlatList
         data={list}
         renderItem={({item})=>{
           
            return(
                <Tile render={abc} name={item}/>
            )
           
        }} 
            keyExtractor={(list)=>list}
        />
<Button onPress={()=>{
save();
}}
title="Save list"
/>

    </View>)
}

const styles = StyleSheet.create({
  
});

export default HomeScreen