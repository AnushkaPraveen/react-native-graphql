import React, { useState } from "react";
import {View,Text, Button,StyleSheet,ScrollView} from "react-native"
import axios from "axios";
import { useQuery } from "react-query";


const endpoint = "https://api.spacex.land/graphql/";
const GRAPHQL_QUERY = `
  {
    launchesPast(limit: 10) {
      id
      mission_name
      rocket {
        rocket_name
        }
    }
    
  }
`;

const Home =()=>{
    const[data,setData]=useState([])

    const fetchData = async () => {
        await axios({
          url: endpoint,
          method: "POST",
          data: {
            query: GRAPHQL_QUERY
          }
        }).then(response => setData(response.data.data));
        console.log(data);
        
      };

    
    
    return(
        <ScrollView >
        
        <Text style={styles.headline}>SpaceX Missions</Text>
        {data.length==0?  <View style={styles.button}> 
            <Button  title="get Data" onPress={fetchData}/> 
          </View>:null}
          
           
           
           {data.length!= 0? <View>{data.launchesPast.map((launch) => (
          <View style={styles.list} key={launch.id}><Text style={styles.list_text}style={styles.list_text}>Mission Name - <Text style={styles.sub_text}>{launch.mission_name} </Text></Text><Text style={styles.list_text}>Rocket Name - <Text style={styles.sub_text}>{launch.rocket.rocket_name}</Text></Text></View>
        ))}</View> :null}
       
           
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    headline:{
       fontSize:40,
       alignSelf:'center',
       marginTop:40,
       fontWeight:'bold',
       color:'#00A5BF'      
        
    },
    button:{
padding:30,

alignItems:'center'
    },
    list:{
        marginTop:20,
        marginLeft:40,
    },
    list_text:{
        fontSize:20,
        fontWeight:'bold'
    },
    sub_text:{
        fontSize:20,
        fontWeight:'400',
        color:'black'
    }

})
export default Home;