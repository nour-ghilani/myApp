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

export default class Seven extends React.Component{

  render(){
      const eighty= require("../assets/eighty.png")
    const empty = require("../assets/empty.png");
    const seven = require("../assets/seven.png")
    return(
 <View>
    
 <Text style = {styles.ftext}>You Need To Drink At Least 8 Cups of Water a Day</Text>
 <TouchableOpacity    onPress={()=>this.goToWaterScreen()}>
  <Ionicons onPress = {() => this.props.navigation.navigate('Eight')}style = {styles.add} name="add-circle" />
  
  <View  style = {styles.one} ></View>
 
  
  </TouchableOpacity>

 <Image source ={ seven} style = {styles.bottle}/>
  <Image source ={ eighty} style = {styles.percentage}/>
  
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
       percentage:{
    width:100,
    height:130,
    marginLeft:115,
    marginTop: - 300
  }
})