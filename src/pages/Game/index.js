import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';

import styles from './styles';

export default function Game() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}
