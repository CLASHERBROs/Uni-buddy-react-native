import React,{useState} from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
import Field from "../components/field"


const HomeScreen = ()=>{
    const [subjects,setSubject] = useState("")
 const[list,setList]=useState([])
 
 return(<View>

<Field subjects={subjects} onSubjectChange={newSubject=>setSubject(newSubject)} listChange={newMember=>setList(list.concat(newMember))}
 />



        <Text>Home Screen subjects will be displayed here</Text>

        <FlatList
         data={list}
         renderItem={({item})=>{
            return(
                <Text>{item}</Text>
            )
        }} 
            keyExtractor={(list)=>list}
        />
    </View>)
}

const styles = StyleSheet.create({});

export default HomeScreen