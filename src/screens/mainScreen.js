import React from 'react';
import {View, Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const mainScreen = ({route}) => {
  console.log('ROUTE : ', route);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: RFPercentage(3.5),
        }}>
        Successfully logged in
      </Text>
      <Text>{route.params}</Text>
    </View>
  );
};

export default mainScreen;
