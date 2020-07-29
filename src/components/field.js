import React from 'react'
import {View,TextInput,Button,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const Field = ({subjects,onSubjectChange,listChange})=>{
return(
    <View style={styles.background}>
      <TextInput style={styles.inputStyle} placeholder="add subject" 

value={subjects}
onEndEditing={()=>{listChange(subjects);
onSubjectChange("")
  }
}
onChangeText={(newSubject)=>onSubjectChange(newSubject)}
      />
    <AntDesign name="rightcircle" size={30} style={
        {
           alignSelf:'center',
       

        }
    } color="black"  />
      
    </View>
)


}


const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        borderRadius:5,
    height:40,

    marginHorizontal:15,
    flexDirection:"row",
    },
    inputStyle:{
        flex:1,
        fontSize:20

    }
    
})
export default Field