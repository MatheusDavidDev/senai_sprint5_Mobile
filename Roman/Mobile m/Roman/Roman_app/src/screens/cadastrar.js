import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render (){
      return(
        <View style={styles.main}>
            <Text>Cadastrar</Text>
        </View>
      )
    
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
