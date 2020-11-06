import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import auth from '@react-native-firebase/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const loginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.header2Text}>Log in</Text>
      </View>
      <View style={styles.formView}>
        <TextInput
          style={styles.formInput}
          placeholder="Email"
          onChangeText={(i) => {
            setEmail(i);
          }}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          onChangeText={(i) => {
            setPassword(i);
          }}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.formButton}
          onPress={() => {
            console.log('PASSWORD: ', password);
            console.log('EMAİL: ', email);
            auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');
                navigation.navigate('Home', email);
              })
              .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                  Alert.alert(
                    'Incorrect Email',
                    'That email address is invalid!',
                    [{text: 'OK'}],
                  );
                  console.log('That email address is invalid!');
                } else if (error.code === 'auth/wrong-password') {
                  Alert.alert(
                    'Incorrect Password',
                    'Your Password Does Not Match',
                    [{text: 'OK'}],
                  );
                  console.log('That password is wrong!');
                }

                console.error(error);
              });
          }}>
          <Text style={styles.formButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Click here to{' '}
          <Text
            style={styles.footerTextRegister}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            REGİSTER
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  footerTextRegister: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
    color: '#7D84B2',
  },
  footerText: {
    fontSize: RFPercentage(2),
    color: 'black',
    margin: 15,
    marginLeft: 25,
  },
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
  formView: {flex: 2, paddingLeft: 30, paddingTop: 30},
  headerView: {flex: 1, justifyContent: 'flex-end', paddingLeft: 30},
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9ED',
  },
});
