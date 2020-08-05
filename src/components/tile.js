import React from 'react'
import {Text,View,Button,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native'
import image from "../../assets/images/1.png"
const Tile = (props)=>{
  var a = props.name;
  
    return(
        <View style={styles.items}>
   <ImageBackground style={styles.container} source={image}>
     <TouchableOpacity  style={styles.btn} onPress={()=>{props.render('Note',{
        itemId:a,
     
      });
       }}>

       <Text>{props.name}</Text>
     </TouchableOpacity>
     
      {/* <Button color="#00000000" style={styles.btn} onPress={()=>{props.render('Note',{
        itemId:a,
     
      });
       }} title={props.name} /> */}
   </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({

    btn:{
    alignSelf:"center",
 
        
    },
    container: {
        justifyContent:"center",
        flexDirection:'row',
        flex: 1,
        position: 'relative',
        resizeMode: 'cover',
        alignItems:"center"
      },
      items:{marginVertical:10,
        height:80,
        justifyContent: 'center', 
        
      

      }
})



export default Tile