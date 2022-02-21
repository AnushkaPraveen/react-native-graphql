import React, { useState } from 'react'
import {View,Text,StyleSheet,Button,TextInput} from 'react-native'
import { useSelector } from 'react-redux'

const SubPage=()=>{
    const data=useSelector(state=>state.data);
const [textWord,onChangeText]=useState('')

    return(<View>
        
            <View>
            <TextInput style={styles.input}
              onChangeText={onChangeText}
              value={textWord}
            />
           
            
              {data.filter(text=>text.data.mytextarea==textWord).map((cms,i)=> (
                
                <View style={styles.list} key={i}>
                <Text style={styles.list_text}>Movie</Text>
                  {/* <Text>{cms.displayName}</Text>
                  <Text style={styles.list_text}>Subtitle</Text>
                  <Text style={styles.list_text}>{cms.data.subtitle}</Text>
                  <Text style={styles.list_text}>Abstract</Text>
                  <Text>{cms.data.abstract}</Text> */}
                  <Text>{cms.displayName}</Text>
                  <Text>{cms.data.mytextline}</Text>
                 
                </View>
                
              ))}
              
            </View>
          
          </View>
    )
}
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
    input:{
      height: 40,
    marginTop: 42,
    margin:20,
    borderWidth: 1,
    padding: 10,
    }
  });

export default SubPage;