import { View, Text ,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { FloatingAction } from "react-native-floating-action";




export default function FloatingBtn() {

    const actions = [
        {
            text: "user",
          icon: require("../assets/userDD.png"),
          name: "bt_accessibility",
          position: 2,
          
        },
        {
            text: "user",
          icon: require("../assets/userDD.png"),
          name: "bt_language",
          position: 1
        },
        {
            text: "user",
          icon: require("../assets/userDD.png"),
          name: "bt_room",
          position: 3
        },
        {
            text: "user",
          icon:  require("../assets/userDD.png"),
          name: "bt_videocam",
          position: 4
        }
      ];

  return (
    <View style={styles.container}>
  <Text style={styles.example}>Refer</Text>
  <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
</View>

  )
}



const styles = StyleSheet.create({
    container:{
        width:20,
        height:20,
        marginTop:50,
        position:'absolute',
        backgroundColor:'black',
        
        
    },
    example:{
        color:'#ffff',
        fontSize:10,
    
        
    }
})