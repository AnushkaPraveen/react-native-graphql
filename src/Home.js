import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView,Image,Card} from 'react-native';
import axios from 'axios';


const endpoint = 'http://10.0.2.2:8080/site/hmdb/master/hmdb/api';
const GRAPHQL_QUERY = `
{
  guillotine{
    getChildren(key:"/hmdb/movies" first:50){
          displayName
          data : dataAsJson
      }
  }
}
`;

const Home = () => {
  const[data,setData]=useState([])

  const fetchData = async () => {
    await axios({
      url: endpoint,
      method: 'POST',
      data: {
        query: GRAPHQL_QUERY,
       
      },
      /* headers:{
            'Content-Type': 'application/json',
           /*  'Access-Control-Allow-Origin': '*',
            'access-control-allow-headers':'Content-Type',
            'access-control-allow-methods':'POST,OPTIONS'
      } */
    }).then(response => setData(response.data.data.guillotine.getChildren));
   
  };

  return (
  <ScrollView>
        <View style={styles.button}>
          <Button title="get Data" onPress={fetchData} />
</View>
  {data.length != 0 ? (
        <View>
          {data.map( (cms)=> (
            
            <View style={styles.list} >
            <Text style={styles.list_text}>Movie</Text>
              <Text>{cms.displayName}</Text>
              <Text style={styles.list_text}>Subtitle</Text>
              <Text style={styles.list_text}>{cms.data.subtitle}</Text>
              <Text style={styles.list_text}>Abstract</Text>
              <Text>{cms.data.abstract}</Text>
             
            </View>
            
          ))}
        </View>
      ) : null} 

      </ScrollView>
     

    
  );
};
const styles = StyleSheet.create({
  headline: {
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: 'bold',
    color: '#00A5BF',
  },
  button: {
    padding: 30,

    alignItems: 'center',
  },
  list: {
    marginTop: 20,
    marginLeft: 30,
    marginRight:30,
    marginBottom:10
  },
  list_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sub_text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
});
export default Home;
