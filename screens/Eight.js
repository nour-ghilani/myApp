import React , {Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import One from './One';

export default class Eight extends React.Component{


  render(){
     const hundred= require("../assets/hundered.png")
    const empty = require("../assets/empty.png");
    const eight = require("../assets/eight.png")
    return(
 <View>
    
 <Text style = {styles.ftext}>You Need To Drink At Least 8 Cups of Water a Day</Text>
 <TouchableOpacity    onPress={()=>this.goToWaterScreen()}>
  <Ionicons onPress = {() => this.props.navigation.navigate('Nine')}style = {styles.add} name="add-circle" />
  
  <View  style = {styles.one} ></View>
   <Image source ={ hundred} style = {styles.percentage}/>
  
  </TouchableOpacity>

 <Image source ={ eight} style = {styles.bottle}/>
<View style = {styles.cong}>
<Text  style= {styles.message }> Congratulations You Have Achieved Your Goal !!!</Text>
<TouchableOpacity onPress = { ()=> this.props.navigation.navigate('HomeScreen')} style = {styles.button} > 
OK
</TouchableOpacity>
  </View>
 </View>
    )
  }
}

const styles = StyleSheet.create({



  ftext:{
    textAlign:"center",
    fontWeight:"bold",
    color:"#0e87cc",
    fontSize:20,

  },

  bottle:{
    width:250,
    height:420,

   marginLeft:45
  },
  add:{
    color:"blue",
    width:50,
    height:50,
    marginLeft:140,
    fontSize :50,
  },
  cong:{
  backgroundColor: "pink",
  borderRadius : 15,
  marginleft: 30,
  marginTop: -350,
  padding:15,
  borderWidth:3,
  borderColor:"#63C5DA",

  },
  message:{
    fontSize: 30,
    boldWeight:"bold",
    textAlign:"center",
    justifyContent:"center"

  },
  button:{
    borderRadius : 15,
  width:75,
   
    //alignItems:"center",
    backgroundColor: "#63C5DA",
    marginLeft: 107,
    
borderWidth:3,
    borderColor:"black",
    fontSize:30,
    padding :10,
 
    
  },
         percentage:{
    width:100,
    height:130,
    marginLeft:115,
    marginTop: - 300
  }
})