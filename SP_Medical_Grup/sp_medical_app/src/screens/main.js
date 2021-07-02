import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Consultas from './consultas';
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
                activeBackgroundColor: '#81DF99',
                inactiveBackgroundColor: '#3582FF',
                activeTintColor: '#38B3E8',
                inactiveTintColor: 'red',
                style: { height: 55 }
              }}
              screenOptions={({ route }) => ({
                tabBarIcon: () => {
                  if (route.name === "Consultas") {
                    return(
                      <Image
                        source={require('../../assets/img/calendar.png')}
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
              <bottomTab.Screen name="Consultas" component={Consultas}/>
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