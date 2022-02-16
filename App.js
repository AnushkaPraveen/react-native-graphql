
import React,{ useState, useEffect }  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import axios from 'axios';
import * as Constants from './constants';
/* import { QueryClient, QueryClientProvider,useQuery } from "react-query"; */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

/* const endpoint = "https://api.spacex.land/graphql/";
const FILMS_QUERY = `
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`; */

/* const client = new QueryClient(); */
const App=()=>{
  /* const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: FILMS_QUERY
      }
    }).then(response => response.data.data);
  }); */

 /*  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
 */
  /* const[gdata,setData]=useState([])
  
 
    const fetchData = async () => {
      const queryResult = await axios.post(
          Constants.GRAPHQL_API, {
          query: Constants.GET_DATA
        }
      );
      const result=queryResult.data.rates
      setData(result)
     console.log(queryResult);
    };
 
  */

  return(
    <NavigationContainer>
    {/* <QueryClientProvider client={client}> */}
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
    </Stack.Navigator>
  {/*   </QueryClientProvider> */}
  </NavigationContainer>

  
  )}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
