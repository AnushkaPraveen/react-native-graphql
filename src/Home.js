import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView,Image,Card} from 'react-native';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { SetCMSData } from './redux/reducer';


const endpoint = 'http://10.0.2.2:8080/site/hmdb/master/hmdb/api';
const GRAPHQL_QUERY = `
{
  guillotine{
    getChildren(key:"/hmdb/sample" first:50){
          displayName
          data : dataAsJson
      }
  }
}
`;

const Home = ({navigation}) => {
  const dispatch=useDispatch();
  const[data,setData]=useState([])

  const fetchData = async () => {
    await axios({
      url: endpoint,
      method: 'POST',
      data: {
        query: GRAPHQL_QUERY,
       
      },
  
    }).then(response =>(dispatch(SetCMSData(response.data.data.guillotine.getChildren))) /* setData(response.data.data.guillotine.getChildren) */)/* .then(dispatch(SetCMSData(data))) */;
   
  };

  return (
  <ScrollView>
        <View style={styles.button}>
          <Button title="get Data" onPress={fetchData} />
</View>
  {data.length != 0 ? (
        <View>
          {data.map( (cms,i)=> (
            
            <View style={styles.list} key={i}>
            <Text style={styles.list_text}>Movie</Text>
             {/*  <Text>{cms.displayName}</Text>
              <Text style={styles.list_text}>Subtitle</Text>
              <Text style={styles.list_text}>{cms.data.subtitle}</Text>
              <Text style={styles.list_text}>Abstract</Text>
              <Text>{cms.data.abstract}</Text> */}
              <Text>{cms.data.mytextline}</Text>
             
            </View>
            
          ))}
          
        </View>
      ) : null} 
      <View style={styles.button}>
          <Button title="Go to Sub Page" onPress={()=>navigation.navigate('SubPage')} />
</View>
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
