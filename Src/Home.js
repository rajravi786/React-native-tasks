
import React from 'react'
import {View, SafeAreaView,Text ,StyleSheet ,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import FloatingBtn from './FloatingBtn'



export default function Home() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>

    <View>
    <FontAwesome5
    name="map-marker-alt"
    size={30}
   ></FontAwesome5>
   <Text style={styles.name}>Bengaluru</Text> 
   </View>


    <View style={styles.plus}>
    <TouchableOpacity>
    <FontAwesome5
    name="plus-circle"
    size={30}
   ></FontAwesome5>
   </TouchableOpacity>

   <TouchableOpacity>
    <FontAwesome5
    style={styles.profile}
    name="user-circle"
    size={30}
   ></FontAwesome5>
   </TouchableOpacity>
   </View>




<View>
<Text style={{fontSize:20,alignSelf:'flex-start' ,color:'#ffff',marginTop:30}}>Logo Design Brief</Text>
<TouchableOpacity>
<FontAwesome5
style={styles.sound}
name="fast-forward"
size={20}
></FontAwesome5>
</TouchableOpacity>


</View>


<Text style={{color:'#ffff',marginTop:7}}>Lorem ipsum dolor sit amet. Aut totam quas qui sint nostrum qui magni assumenda et blanditiis excepturi .</Text>

<Text style={{color:'#ffff',marginTop:5}}>Hic tenetur atque et vitae iste et esse reprehenderit aut consequuntur sunt hic totam voluptatem.</Text>


<View style={{marginTop:15}}>
<FontAwesome5
name="ruler"
size={20}
></FontAwesome5>
<Text style={styles.tegs}>Tags</Text>
<Text style={styles.titlename}>Fun,Minimal,Attractive</Text> 
</View>

<View style={{backgroundColor:'#ffff',padding:1,margin:5}}></View>

<View style={{marginTop:15}}>
<FontAwesome5
name="map-marker-alt"
size={20}
></FontAwesome5>
<Text style={styles.tegs}>Location</Text>
<Text style={styles.titlename}>Any</Text> 
</View>


<View style={{backgroundColor:'#ffff',padding:1,margin:5}}></View>

<View style={{marginTop:15}}>
<FontAwesome5
name="radiation"
size={20}
></FontAwesome5>
<Text style={styles.tegs}>Tags</Text>
<Text style={styles.titlename}>Logo design,Food and Beverage</Text> 
</View>

<View style={{backgroundColor:'#ffff',padding:1,margin:5}}></View>

<View style={{marginTop:15}}>
<FontAwesome5
name="calendar-plus"
size={20}
></FontAwesome5>
<Text style={styles.tegs}>Posted Date</Text>
<Text style={styles.titlename}>O8 sep 2021</Text> 
</View>



<View style={{backgroundColor:'#ffff',padding:1,margin:5}}></View>

<View style={{marginTop:15}}>
<FontAwesome5
name="calendar-plus"
size={20}
></FontAwesome5>
<Text style={styles.tegs}>Due Date</Text>
<Text style={styles.titlename}>08 sep 2021</Text> 
</View>
<View style={{backgroundColor:'#ffff',padding:1,margin:5}}></View>

<View style={{marginTop:20}}>
<FontAwesome5
name="radiation"
size={20}
></FontAwesome5>
<Text style={styles.tegs}>Budget</Text>
<Text style={styles.titlename}>15,000</Text> 
</View>






<View style={styles.viewbox}>
<FloatingBtn/>
</View>







<View style={styles.viewtext2}>
<TouchableOpacity>
<FontAwesome5

name="user-circle"
size={40}
></FontAwesome5>
</TouchableOpacity>
<Text style={{color:'#ffff'}}>Hustl</Text>
</View>





    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeAreaView:{
  backgroundColor:"black",
  padding:20,
  marginTop:40,
  paddingBottom:100
    },


    name:{
        fontSize:14,
        marginTop:-20,
        marginLeft:30,
        color:"#ffff"

    },
    plus:{
        alignSelf:'flex-end',
    marginTop:-30,
    },
    profile:{
    marginLeft:40,
    marginTop:-30
    },
    title:{
    fontSize:"20",
    color:"#ffff"
    },
    sound:{
        alignSelf:'flex-end',
        marginTop:-30
    },
    titlename:{
marginLeft:40,
color:'#ffff',
fontSize:15

    },
    tegs:{
        marginLeft:60,
        color:'#ffff',
        marginTop:-30
    },
    viewbox:{
        marginTop:20,
        alignSelf:'center',
        marginRight:30,
        marginBottom:20,
    paddingBottom:10
    },
    viewtext2:{
        alignSelf:'center',
        marginLeft:110,
        marginTop:-40,
        paddingBottom:10,
        

    },

})