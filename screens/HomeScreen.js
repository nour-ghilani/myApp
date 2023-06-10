import React , {Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity 
} from 'react-native';
const boy = require("../assets/boy.png");
export default class HomeScreen extends React.Component{
 goToDataScreen=()=> {
      this.props.navigation.navigate('DataScreen')
    }
  render(){
    return(
 <View>
 
 <Text style = {styles.header}> Water Tracking App </Text>
 
 <TouchableOpacity

 style = {styles.button}
 onPress ={() => this.goToDataScreen() }>
 <Text style = {styles.buttonText} >Check Your Water Consumption </Text>

 </TouchableOpacity>
 <Image source = {boy} style = {styles.boy_pic}/>
 
 </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    color: '#00B8F1',
    marginLeft: 15,
   marginTop:10,
    fontSize: 30,
    fontWeight:"bold",
   
  },
  
  button:{
    justifyContent:"center",
    alignItems: "center",
    borderColor: "#0e87cc",
    borderWidth:2,
    borderRadius: 100,
    marginTop:30,
    marginLeft:20,
    width:200,
    height:200,
    backgroundColor:'#0e87cc'

  },

  buttonText:{
    textAlign:"center",
    fontWeight:"bold",
    color:"white",
    fontSize:20

  }

  , 
  boy_pic:{
    resizeMode:"contain",
    marginLeft:80,
    marginTop:-50,
     width: 280,
    height: 280,
   
  }
  









})