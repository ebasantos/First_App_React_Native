import React  from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class Welcome extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Bem Vindo a Obleas Brasil!</Text>
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

