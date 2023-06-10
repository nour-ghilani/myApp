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
export default class Three extends React.Component{

  render(){
    
    const empty = require("../assets/empty.png");
    const three = require("../assets/three.png");
    const thirty = require("../assets/thirty.png");

    return(
 <View>
    
 <Text style = {styles.ftext}>You Need To Drink At Least 8 Cups of Water a Day</Text>
 <TouchableOpacity    >
  <Ionicons onPress={()=>this.props.navigation.navigate("Four")}style = {styles.add} name="add-circle" />
  
  <View  style = {styles.one} ></View>
 
  
  </TouchableOpacity>

 <Image source ={three} style = {styles.bottle}/>
 <Image source ={thirty } style = {styles.percentage}/>
  
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
  one:{

  },
   percentage:{
    width:100,
    height:130,
    marginLeft:115,
    marginTop: - 300
  }
})