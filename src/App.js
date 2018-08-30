import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import Header from './components/common/Header';
import Button from './components/common/Button';
import LoginForm from './components/LoginForm';
import CardSection from './components/common/CardSection';
import Spinner from './components/common/Spinner';

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCUakFopNx9ZWGPlI4RQ32YJYF4_Dh7RjE',
      authDomain: 'react-native-auth-firebase.firebaseapp.com',
      databaseURL: 'https://react-native-auth-firebase.firebaseio.com',
      projectId: 'react-native-auth-firebase',
      storageBucket: 'react-native-auth-firebase.appspot.com',
      messagingSenderId: '198021129961',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerTitle="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
