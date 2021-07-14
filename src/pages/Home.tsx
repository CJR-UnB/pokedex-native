import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import Feed from '../pages/Feed';
import Favorites from '../pages/Favorites';
import Header from '../components/Header';

export default function Home() {
  return (
    <Tab.Navigator tabBar={props => <Header {...props} />}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}