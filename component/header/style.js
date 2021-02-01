import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
    headercontainer:{
       position:"absolute",
       top:50,
       zIndex:100,
       flexDirection:"row",justifyContent:'space-between',
       width:'100%',
       paddingLeft:30,
    },
  menu:{
    height:25,
    width:25, 
    resizeMode:'contain'
  }  ,
  logo:{
      width:100,
      height:20,
      resizeMode:'contain'
  }
})
export default HeaderStyle;