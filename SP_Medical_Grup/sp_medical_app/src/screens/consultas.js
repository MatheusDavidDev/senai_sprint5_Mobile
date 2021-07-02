import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import api from '../services/api'
import axios from 'axios';
import { color } from 'react-native-reanimated';

export default class Consultas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultas: [],
            nomeUsuarioLogado: '',
            idUsuarioLogado : '',
            //token : ''
        };
    }

    buscaDados = async ()  => {
        try {
            const valorToken = await AsyncStorage.getItem('userToken')

            if (valorToken !== null) {
                this.setState({idUsuarioLogado : jwtDecode(valorToken).jti});
                this.setState({nomeUsuarioLogado : jwtDecode(valorToken).name})
                //this.setState({token : valorToken})

                //console.warn((valorToken))
            }
        } catch(error) {

        }
    }

    buscarConsultas = async () => {
        const valorToken = await AsyncStorage.getItem('userToken')
        
        const resposta = await axios
        ('http://localhost:5000/api/Consultas/minhasconsultas', {
                headers: {
                  Authorization: "Bearer " + valorToken
                }
              }
        );

        this.setState({ consultas : resposta.data });
        console.log(this.state.consultas)
        
    };

    componentDidMount() {
      this.buscaDados();  
      this.buscarConsultas();

    };
    

    render(){
        return(

            <View style={styles.main}>

                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        {/*<Image 
                            source={require()}
                            style={styles.mainHeaderImg}
                        />*/}
                        <Text style={styles.mainHeaderText}>Suas consultas</Text>
                    </View>
     
                    <View style={styles.mainHeaderLine}>
                    </View>
     
                </View>

                {/* CORPO */}
                        
                <View style={styles.mainBody}>
               
                    <FlatList 
                        contentContainerStyle={styles.mainBodyConteudo}
                        data={this.state.consultas}
                        keyExtractor ={ item => item.idConsulta}
                        renderItem={this.renderItem}            
                    />
                    
                </View>            
            </View>
        );
    }
    renderItem = ({ item }) => (
        <View style={styles.campoConsultas}>
            <View style={styles.campoContainer}>
                <Text style={styles.campoPaciente}>{item.idPacienteNavigation.idUsuarioNavigation.nome}</Text>
                <Text style={styles.campoMedico}>Dr {item.idMedicoNavigation.idUsuarioNavigation.nome}</Text>
            </View>
    
            <View style={styles.desc}>
                <Text style={styles.campoDesc}>Descrição: {item.descricao}</Text>
            </View>
    
            <View style={styles.agenda}>
                <Text style={styles.campoStatus}>{item.situacao}</Text>
                <Text style={styles.campoData}>{new Date (item.dataConsulta).toLocaleDateString()}</Text>
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
        paddingLeft: 50,
        
    },
    
    campoConsultas: {
        width: 300,
        height: 200,
        borderBottomWidth: 2,
        borderColor: '#3582FF',
        marginTop: 30,
        backgroundColor: '#F4F4F4'
        
    },
    
    campoContainer: {
        
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 2,
    },
    
    desc: {
        flex: 5,
    },
    
    agenda: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    
    },
    
    campoPaciente: {
        fontSize: 18,
        marginLeft: 5
    },
    
    campoMedico: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5
    },

    campoDesc: {
        fontSize: 15,
        marginLeft: 5
    },
    
    campoStatus: {
        fontSize: 15,
        marginLeft: 5
    },
    
    campoData: {
        fontSize: 17,
        marginRight: 5,
        marginRight: 5,
        color: 'blue'
    }
    });

