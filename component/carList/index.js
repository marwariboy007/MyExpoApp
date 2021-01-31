import React from 'react';
import { FlatList,  View,Text, Dimensions } from 'react-native';
import carData from '../../model/carData';
import Caritem from '../caritem';

import internalCarStyle from './style';

const CarList = ({
    params,
}) => (
    <View style={internalCarStyle.carcontainer}>     
    <FlatList  style={internalCarStyle.carcontainer}
  data={carData} 
  renderItem={
    ({item}) => <Caritem carModel={item.name} carImage={item.image} carPrice={item.tagline} carTagline={item.taglineCTA}></Caritem>
  } 
  keyExtractor={(item, index) => index.toString()}
  snapToAlignment={'end'}
  decelerationRate={'normal'}
  snapToInterval={Dimensions.get("screen").height}
  /> 
        
    </View>
);

export default CarList;
