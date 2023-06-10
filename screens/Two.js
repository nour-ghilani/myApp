import React , {Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

 goToWaterScreen=()=> {
      this.props.navigation.navigate('Three')
    }
export default class Two extends React.Component{

  render(){
      const twenty = require ("../assets/twenty.png")
    const empty = require("../assets/empty.png");
    const two = require("../assets/two.png")
    return(
 <View>
    
 <Text style = {styles.ftext}>You Need To Drink At Least 8 Cups of Water a Day</Text>
 <TouchableOpacity    >
  <Ionicons onPress={()=>this.props.navigation.navigate("Three")}style = {styles.add} name="add-circle" />
  
  <View  style = {styles.one} ></View>
 
  
  </TouchableOpacity>

 <Image source ={two} style = {styles.bottle}/>
 <Image source ={ twenty} style = {styles.percentage}/>
 </View>
    )
  }
}

const styles = StyleSheet.create({



  ftext:{
    textAlign:"center",
    fontWeight:"bold",
    color:"#0e87cc",
    fontSize:20

  },

  bottle:{
    width:260,
    height:430,

   marginLeft:45
  },
  add:{
    color:"blue",
    width:50,
    height:50,
    marginLeft:140,
    fontSize :50,
  },
   percentage:{
    width:100,
    height:130,
    marginLeft:115,
    marginTop: - 300
  }
})