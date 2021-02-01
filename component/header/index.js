import React from 'react';
import { Text, View ,Image} from 'react-native';
import HeaderStyle from './style';

const HeaderComponent = ({
    params,
}) => (
    <View style={HeaderStyle.headercontainer}> 
        <Image style={HeaderStyle.logo    } source={require('../../assets/images/logo.png')} />
        <Image style={HeaderStyle.logo    } source={require('../../assets/images/menu.png')} />
    </View>
);

export default HeaderComponent;
