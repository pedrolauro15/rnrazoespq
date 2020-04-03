import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.jpeg';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Olá, <Text style={styles.bold}>seja bem-vindo(a)!</Text> Nosso aplicativo foi desenvolvido por duas Psicólogas e uma estudante de Psicologia com o objetivo de promover um diálogo entre adolescentes, com o objetivo de promover saúde física e mental permitindo tratar de temáticas delicadas como: sofrimento psíquico, sofrimento físico, alternativas para superação de crise e automutilação. O aplicativo foi desenvolvido com a premissa lúdica de gerar entre adolescentes e seus familiares, cuidadores e responsáveis um diálogo semi-estruturado em que são pensados  temáticas envolvem o processo de automutilação. 
          </Text>
        </View>
        <Text style={styles.sub}>Automutilação <Text style={styles.bold}>NÃO</Text> é brincadeira!</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Drawer')}}>
          <Text style={styles.buttonText}>
            Vamos embarcar nessa viagem de autoconhecimento
            <AntDesign style={styles.icon} name={'arrowright'}/>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
