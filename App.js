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


function Listao( data ){
  return(
    <View style={styles.listaItem}>
      <Text style={styles.listText}>{ data.nome_completo}</Text>
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
 listaItem: {
   backgroundColor:'#fff',
   padding:20,
   marginTop:20,
   borderRadius:10
 },
 listText: {
   color:'#f60',
   fontSize:18
 }
});
