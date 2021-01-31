import {StyleSheet,Dimensions} from 'react-native';

const Carstyles =StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carcontainer:{
     width:'100%',
     height:Dimensions.get("screen").height
    },
    titles:{
      marginTop:'30%',
      width:'100%',
      alignItems:'center'
    },
    title:{
      fontSize:30,
      fontWeight:'bold'
    },
    subtitle:{
      fontSize:15,
      color:'#5e5c5e'
    },subtitleTag:{
      fontSize:15,
      color:'#5e5c5e',
      textDecorationLine:"underline",marginLeft:10
    },
    image:{
  width:'100%',
  height:'100%',
  resizeMode: 'cover',
  position:'absolute'
    },

    btnContainer:{
      position: "absolute",
      bottom:50,
      width:"100%"
    }
});
export default Carstyles