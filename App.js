import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'
import Home from './Src/Home';
import User from './Src/User';
import Users from './Src/users';
import Msg from './Src/Msg';
import Btn from './Src/Btn';






const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
        
        />


      
        <Tab.Screen name="Msg" component={Msg} 
        options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="comment" color={color} size={size} />
          ),
          headerShown: false
        }}
        
        />

        <Tab.Screen name="Btn" component={Btn} 
        options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus-square" color={color} size={size} />
          ),
          headerShown: false
        }}
        
        />



      
        <Tab.Screen name="Users" component={Users} 
        options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="folder-open" color={color} size={size} />
          ),
          headerShown: false
        }}
        
        />

        <Tab.Screen name="User" component={User} 
        options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
          headerShown: false
        }}
        
        />
      






     
      </Tab.Navigator>
      </NavigationContainer>
  );
}