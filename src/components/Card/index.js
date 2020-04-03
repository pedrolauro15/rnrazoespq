import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

export default function Card() {
  const message = [
    {
      index: 0,
      message: 'Para você, o que pode mudar sua vida?'
    },
    {
      index: 1,
      message: 'Quais hábitos impedem você de ficar bem?'
    },
    {
      index: 2,
      message: 'Qual objetivo você pretende alcançar ao se machucando?'
    },
    {
      index: 3,
      message: 'Do que você está disposto a desistir para melhorar a sua qualidade de vida?'
    },
    {
      index: 4,
      message: ' Você já procurou conhecer melhor sobre a prática de automutiliação?'
    },
    {
      index: 5,
      message: 'Quais comportamentos você pode realizar na próxima semana para te deixar feliz?'
    },
    {
      index: 6,
      message: 'Se você fosse o seu responsável o que faria por você nesse momento?'
    },
    {
      index: 7,
      message: 'Qual impacto negativo você verifica sobre se machucar?'
    },
    {
      index: 8,
      message: 'Existe uma dor/sentimento prevalecente em sua vida? Qual?'
    },
    {
      index: 9,
      message: 'O que você está disposto a fazer para obter o que deseja?'
    },
    {
      index: 10,
      message: 'O que você sente quando você recorda de lembranças negativas?'
    },
    {
      index: 11,
      message: 'Quais são as suas atividades de lazer?'
    },
    {
      index: 12,
      message: 'O que alivia a sua ansiedade?'
    },
    {
      index: 13,
      message: 'Como você acha que eu posso te ajudar?'
    },
    {
      index: 14,
      message: 'Por que você esconde as suas marcas?'
    },
    {
      index: 15,
      message: 'O que é tristeza para você?'
    },
    {
      index: 16,
      message: 'Quais emoções são mais prevalentes ao ponto de você se machucar?'
    },
    {
      index: 17,
      message: 'Algo ou alguém já te estimulou a se machucar?'
    },
    {
      index: 18,
      message: 'Você conhece pessoas que se machucam?'
    },
    {
      index: 19,
      message: 'Você assiste/segue alguém que faz ou já fez isso?'
    },
    {
      index: 20,
      message: 'O que você sente quando as pessoas percebem que você se machuca?'
    },
    {
      index: 21,
      message: 'Você consegue pensar em algo diferente para fazer quando sente vontade de se machucar?'
    },
    {
      index: 22,
      message: 'O que você entende por ansiedade?'
    },
    {
      index: 23,
      message: 'Existe algo que você não gosta de fazer quando está se sentindo para baixo?'
    },
  ];
  
  const [isVisible, setIsvisible] = useState(true);
  const [mess, setMess] = useState(message[0]);
  const [i, setI] = useState(0);
  const buttonRef = useRef();

  const action = () => {
    buttonRef.current.flipInY();
    var j = i;
    if( j !== (message.length - 1)){
      setI(i + 1);
      j++;
    } else {
      j =0;
      setI(0);
    }

    setMess(message[j]);
  }

  if(isVisible){
    return(
        <View style={styles.container}>
          <Animatable.View
            style={styles.cardContainer}
            animation={'flipInY'}
            useNativeDriver
            ref = {buttonRef}
          >
          <Text style={styles.index}> {(mess.index + 1)} </Text>
          <Animatable.Text
            style={styles.cardText}
          >
            {mess.message}
          </Animatable.Text>
          <TouchableOpacity onPress={action} style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Próxima pergunta</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  } else {
    return null;
  }
}
