import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ItemDonateScreen from '../screens/ItemDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : ItemDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);
