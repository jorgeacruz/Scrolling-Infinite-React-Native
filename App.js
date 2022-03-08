import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const baseUrl = 'https://api.github.com';
  const perPage = 20;
  
  const[data, setData] = useState([
    {id:1, nome_completo:'Jorge Cruz'}
  ]);

  return (
    <View style={styles.container}>
      <FlatList 
      style={{marginTop:40}}
      contentContainerStyle={{marginHorizontal:20}}
      data={data}
      keyExtractor={ item => String(item.id)}
      renderItem={ ({item}) => <Listao/>}
      />
      
    </View>
  );
}


function Listao({ data }){
  return(
    <View style={styles.ListItem}>
      <Text style={styles.LisTexto}>{data.nome_completo}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListItem: {
    backgroundColor:'#fff',
    padding:20,
    borderRadius:10
  },
  LisTexto: {
    color:'#000',
    fontSize:18
  }

});
