import React from 'react';
import { View, Image } from 'react-native';
import { StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

import logoImg from './assets/logo.jpeg';

import Home from './pages/Home';
import Help from './pages/Help';
import Game from './pages/Game';


const Stack = createStackNavigator();

function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

function headerLeft(action){
  return(
    <TouchableOpacity onPress={action} style={{marginLeft: 10}} >
      <FontAwesome name='bars' size={20} color="#FFF"/>
    </TouchableOpacity>
  );
}

function HelpStack(){
  const navigation = useNavigation();

  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Saiba Mais'
        component={Help}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', color: '#FFF'},
          headerLeft: () => headerLeft(()=>{navigation.openDrawer()}),
          headerStyle: {backgroundColor: '#0ebcde'}
        }}
      />
    </Stack.Navigator>
  );
};

function GameStack(){
  const navigation = useNavigation();

  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Game'
        component={Game}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', color: '#FFF'},
          headerLeft: () => headerLeft(()=>{navigation.openDrawer()}),
          headerStyle: {backgroundColor: '#0ebcde'}
        }}
      />
    </Stack.Navigator>
  );
};
const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#10c2dc'
      }}
      drawerContent = {
        (props) => {
          return(
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
              <Image source={logoImg} style={{width: 130 , height: 100, alignSelf: 'center' }} />
              <DrawerItemList {...props} />
            </View>
          );
        }
      }
    >
      <Drawer.Screen 
        name="Saiba Mais"
        component={HelpStack}
      />

      <Drawer.Screen 
        name="Game"
        component={GameStack}
      />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#10c2dc"/>
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicio" 
          component={HomeStack} 
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Drawer" 
          component={MyDrawer} 
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
