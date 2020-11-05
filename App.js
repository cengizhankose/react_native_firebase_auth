import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9F9ED',
      }}>
      <TextInput
        style={{
          width: '70%',
          height: '10%',
        }}
        placeholder="Email"
      />
      <TouchableOpacity
        style={{
          width: '70%',
          height: '10%',
          backgroundColor: '#7D84B2',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#F9F9ED',
            fontWeight: 'bold',
            fontSize: RFPercentage(4),
          }}>
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
