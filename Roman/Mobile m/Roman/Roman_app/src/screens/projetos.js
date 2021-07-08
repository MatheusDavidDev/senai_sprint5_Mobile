import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import api from '../services/api'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProjetos: [],
      teste: "LISTANDO"
    };
  }

  buscarProjetos = async () => {
    const resposta = await api.get('/projeto');
    this.setState({ listaProjetos : resposta.data });
    console.log(this.state.listaProjetos)
  };

  componentDidMount() {
    this.buscarProjetos();
  }

  render(){
    return (
     <View style={styles.main}>

       <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
             <Image 
                source={require('../../assets/img/ListarColorida.png')}
               style={styles.mainHeaderImg}
             />
              <Text style={styles.mainHeaderText}>Eventos</Text>
          </View>

         <View style={styles.mainHeaderLine}>
         </View>

       </View>

        {/* CORPO */}
          <View style={styles.mainBody}>
              <FlatList 
              contentContainerStyle={styles.mainBodyConteudo}
              data={this.state.listaProjetos}
              keyExtractor ={ item => item.idProjeto}
              renderItem={this.renderItem}            
              />
          </View>

      </View>
    );
  }
  renderItem = ({ item }) => (
    <View style={styles.campoProjetos}>
      <View style={styles.campoContainer}>
        <Text style={styles.campoTitulo}>{item.titulo}</Text>
      </View>

      <View style={styles.nome}>
      <Text style={styles.campoTipo}>{item.idTemaNavigation.tema1}</Text>
        <Text style={styles.campoNome}>{item.idUsuarioNavigation.nome}</Text>
        </View>
    </View>
  )

}
const styles = StyleSheet.create({

    main: {
      flex: 1,
      backgroundColor: '#fff',
    },

    //Topo
    mainHeader : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    mainHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    //Imagem topo
    mainHeaderImg: {
      width: 25,
      height: 25
    },

    mainHeaderText: {
      fontSize: 24,
      fontWeight: '100',      
    },

    mainHeaderLine: {
      width: 156,
      paddingTop: 5,
      borderBottomColor: '#72DE65',
      borderBottomWidth: 2
       

    },

    //CORPO
    mainBody: {
      flex: 4,
      
      alignItems: 'center'
    },

    mainBodyConteudo: {
      paddingTop: 30,
      paddingRight: 50,
      paddingLeft: 50
    },

    campoProjetos: {
      width: 276,
      borderBottomWidth: 2,
      borderBottomColor: '#72DE65',
      marginTop: 30,
      
    },

    nome:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    campoContainer: {
      flex: 1,
    },

    campoTitulo: {
      fontSize: 18,
    },

    campoTipo: {
      fontSize: 14,
    },

    campoNome: {
      fontSize: 14,
      paddingRight: 100
    }
  });