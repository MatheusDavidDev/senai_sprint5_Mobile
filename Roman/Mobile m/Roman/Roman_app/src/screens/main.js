import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projetos from './projetos';
import Cadastrar from './cadastrar';
import Perfil from './perfil';
  
const bottomTab = createBottomTabNavigator();  

export default class App extends Component {
  
  render(){
    return (
      <View style={styles.main}>
          
            <bottomTab.Navigator
              initialRouteName='Projetos'
              tabBarOptions={{
                showLabel: false,
                activeBackgroundColor: '#38B3E8',
                inactiveBackgroundColor: '#72DE65',
                activeTintColor: '#38B3E8',
                inactiveTintColor: 'red',
                style: { height: 55 }
              }}
              screenOptions={({ route }) => ({
                tabBarIcon: () => {
                  if (route.name === "Projetos") {
                    return(
                      <Image
                        source={require('../../assets/img/projetoMenu.png')}
                        style={styles.tabBarIcon}
                      />
                    )
                  }

                  if (route.name === "Cadastrar") {
                    return(
                      <Image
                        source={require('../../assets/img/cadastrarMenu.png')}
                        style={styles.tabBarIcon}
                      />
                    )
                  }

                  if (route.name === "Perfil") {
                    return(
                      <Image
                        source={require('../../assets/img/perfilMenu.png')}
                        style={styles.tabBarIcon}
                      />
                    )
                  }
                }
              })}
              >
              <bottomTab.Screen name="Projetos" component={Projetos}/>
              <bottomTab.Screen name="Cadastrar" component={Cadastrar}/>
              <bottomTab.Screen name="Perfil" component={Perfil}/>        
            </bottomTab.Navigator>
          
        </View>
  
    )
  }  
}
const styles = StyleSheet.create({
  
    main: {
      flex: 1,
      backgroundColor: '#fff',
    },

    tabBarIcon: {
      width: 30,
      height: 30
    }
})