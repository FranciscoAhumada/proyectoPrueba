import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const HelloWord = ({styleCustom}) => {
    return (<View style={stylesecalb.conteiner}>
            <Text style={{fontSize : 24, flex : 1}}>hello word</Text>
            <Text style={[stylesecalb.textDefault, {marginLeft : 15, flex : 1}, styleCustom ? styleCustom.text : {fontSize : 30}]}>texto 2</Text>
        </View>)
}

const stylesecalb = StyleSheet.create({
    conteiner : {
        flexDirection : 'row',
        color : 'blue',
        width : '50%'
    },
    textDefault : {
        color : 'red',
        fontWeight : 'bold',
        fontSize : 20,
        color : 'gray' 
    }
  });

export default HelloWord;