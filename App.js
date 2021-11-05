
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AS_cursos from '@react-native-community/async-storage';
import AS_config from '@react-native-community/async-storage';

export default function App() {

  const [curso, setCurso] = useState(null);

  const Armazenar = (chave, valor)=>{
    AS_cursos.setItem(chave, valor);
  }

  const Buscar = async (chave)=>{
    const valor = await AS_cursos.getItem(chave);
    setCurso(valor);
    
  }

  Armazenar('01', 'React Native');
  Armazenar('02', 'React');
  Armazenar('03', 'HTML5');
  Armazenar('04', 'CSS3');

  Buscar('01')

  return (
    <View style={styles.container}>
      <Text>Armazenamento local / async storage</Text>
      <Text>Curso de {curso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
