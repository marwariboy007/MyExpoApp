import React from 'react';
import { Text, View,Pressable, Alert } from 'react-native';
import MainButtonStyle from './style';

const MainButton = ({ params,btnText,btnType,btnOnPress}
) => (
        
    <View>
        <Pressable  style={[MainButtonStyle.style,{backgroundColor:btnType=="primary"?"#555":"#EEE"}]} onPress={() => btnOnPress() }>
        <Text style={[MainButtonStyle.textStyle,{color:btnType=="primary"?"#FFF":"#000"}]}>{btnText}</Text>
        </Pressable>
        
    </View>
);

export default MainButton;
