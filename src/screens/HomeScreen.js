import React,{useState} from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
import Field from "../components/field"
import Tile from "../components/tile"


const HomeScreen = props=>{
    const [subjects,setSubject] = useState("")
 const[list,setList]=useState([])
//  {console.log(props.navigation.navigate)}
 const abc = props.navigation.navigate

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


    </View>)
}

const styles = StyleSheet.create({
  
});

export default HomeScreen