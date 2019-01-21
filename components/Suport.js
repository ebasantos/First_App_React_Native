import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class Welcome extends React.Component{
    render(){
        return (
                <View style={styles.container}>
                 <Text >NoRollBack Sistemas Inteligentes</Text>
                </View>
            )
    }

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })