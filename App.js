import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const baseUrl = 'https://api.github.com';
  const perPage = 20;
  
  const[data, setData] = useState([
    {id:1, full_name:'Jorge Cruz'}
  ]);

  return (
    <View style={styles.container}>
      <FlatList 
      style={{marginTop:40}}
      contentContainerStyle={{marginHorizontal:20}}
      data={data}
      keyExtractor={ item => String(item.id)}
      renderItem={ ({item}) => <Listao data={item}/>}
      />
      
    </View>
  );
}


function Listao( data ){
  return(
    <View style={styles.listaItem}>
      <Text style={styles.listText}>{ data.full_name }</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 listaItem: {
   backgroundColor:'#000',
   padding:20,
   marginTop:20,
   borderRadius:10
 },
 listText: {
   color:'#000',
   fontSize:16
 }
});
