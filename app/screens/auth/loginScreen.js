import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './../../components/header';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header navigation={this.props.navigation} back title="Log in" />
        {/* <LoginForm navigation={this.props.navigation} /> */}
      </View>
    );
  }
}

export default LoginScreen;
