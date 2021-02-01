import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';


import Caritem from './component/caritem';
import CarList from './component/carList';
import HeaderComponent from './component/header';

export default class App extends React.Component  { 
   render(){
  return (

    <View style={styles.container}>   
    <HeaderComponent></HeaderComponent>   
     <CarList></CarList>       
    </View>
    
  );
}}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   carcontainer:{
//    width:'100%',
//    height:'100%'
//   },
//   titles:{
//     marginTop:'30%',
//     width:'100%',
//     alignItems:'center'
//   },
//   title:{
//     fontSize:30,
//     fontWeight:'bold'
//   },
//   subtitle:{
//     fontSize:15,
//     color:'#5e5c5e'
//   },
//   image:{
// width:'100%',
// height:'100%',
// resizeMode: 'cover',
// position:'absolute'
//   }
// });