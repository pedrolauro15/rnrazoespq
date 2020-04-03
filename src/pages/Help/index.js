import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

export default function Help() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Você Sabia?</Text>
          <Text style={styles.boxDescription}>
            A automutilação é o ato voluntário com a intenção de causar ferimentos e dor a si mesmo, com o intuito de se punir sem a pretensão de cometer o suicídio. Em geral, a vítima não expõem as lesões mantendo em sigilo seus conflitos e sofrimentos. Assim, a  automutilação, refere-se a tentativa de aliviar o sofrimento psíquico enfrentado pelo sujeito transferindo-o para a dor física. As formas de praticar a automutilação incluem, arranhões, mordidas, queimaduras, cortes superficiais, entre outros (BARDIN, 2011). Estando muita vezes relacionados com transtornos mentais: como transtornos afetivos, distúrbio de personalidade, confusão mental. No entanto, também a características relacionadas a conflitos pessoais e familiares: divórcio, conflitos familiares, bullying. Os números crescentes da automutilação e do suicídio entre jovens de 15 a 29 anos levaram os governantes a pensar sobre práticas de prevenção e em 26 de Abril de 2019, foi instituída a lei nº 13819, lei esta que inclui a Política Nacional de Prevenção da Automutilação e do Suicídio, a ser implementada pela União, em cooperação com os Estados, o Distrito Federal e os Municípios. 
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Ajuda profissional</Text>
          <Text style={styles.boxDescription}>
            A automutilação requer auxílio e orientação de profissionais, haja vista que traz um profundo sofrimento para suas vítimas. Assim, busque ajuda e acompanhamento profissional. É essencial que a vítima tenha apoio de Psiquiatras, Psicólogos e algumas vezes outros profissionais da área da saúde. 
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
