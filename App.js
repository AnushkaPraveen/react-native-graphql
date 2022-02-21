
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{Provider} from 'react-redux'
import store from './src/redux/store'
import Home from './src/Home';
import SubPage from './src/SubPage';

const Stack = createNativeStackNavigator();

const App=()=>{
 
  return(
    <Provider store={store}>
    <NavigationContainer>
   
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="SubPage" component={SubPage} />
    </Stack.Navigator>
  
  </NavigationContainer>
  </Provider>

  
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
