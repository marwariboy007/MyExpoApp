import React from 'react';
import { Text, View,ImageBackground } from 'react-native';
import MainButton from '../button/button';
import Carstyles from './style';

const Caritem = ({
    params,carModel,carPrice,carImage,carTagline
}) => (
    <View style={Carstyles.carcontainer}>
    <ImageBackground source={carImage} style={Carstyles.image}></ImageBackground>
      <View style={Carstyles.titles}>
        <Text style={Carstyles.title}>{carModel}</Text>
        <Text style={Carstyles.subtitle}>
                {carPrice}      
                {' '}
                <Text style={Carstyles.subtitleTag}> 
                    {carTagline} 
                </Text>
         </Text>
        
      </View> 
      <View style={Carstyles.btnContainer}>
        <MainButton btnText="Custom Order" btnType="primary" btnOnPress={()=>console.warn("Custom Order pressed")}></MainButton>
        <MainButton btnText="Existing Inventery" btnType="secondry"  btnOnPress={()=>console.warn("Existing Inventry pressed")}></MainButton>
      </View>
    </View>
    
);

export default Caritem;

