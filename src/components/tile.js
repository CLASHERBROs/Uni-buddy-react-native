import React from 'react'
import {Text,View,Button,StyleSheet, ImageBackground} from 'react-native'
import image from "../../assets/images/1.png"
const Tile = (props)=>{
    return(
        <View style={styles.items}>
   <ImageBackground style={styles.container} source={image}>
      <Button  title={props.name} />
   </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({

    btn:{backgroundColor:"orange",
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