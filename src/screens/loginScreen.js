import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const loginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.header2Text}>Log in</Text>
      </View>
      <View style={styles.formView}>
        <TextInput style={styles.formInput} placeholder="Email" />
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.formButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  formButtonText: {
    color: '#F9F9ED',
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
  },
  formButton: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.07,
    backgroundColor: '#7D84B2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.07,
    borderWidth: 1.5,
    borderColor: '#7D84B2',
    borderRadius: 20,
    paddingLeft: 25,
    marginBottom: 10,
  },
  header2Text: {
    fontWeight: 'bold',
    fontSize: RFPercentage(3.5),
    color: '#D9DBF1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: RFPercentage(6),
    color: '#8E9DCC',
  },
  formView: {flex: 2, paddingLeft: 30},
  headerView: {flex: 1, justifyContent: 'flex-end', paddingLeft: 30},
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9ED',
  },
});
