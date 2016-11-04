'use strict';

import React from 'react'

var FloatingLabel = require('react-native-floating-labels');

import {
  AppRegistry,
  StyleSheet,
  View,
  Platform
} from 'react-native'

import MK from 'maya-kai'
if (Platform.OS === 'android') {
  MK.start('10.0.2.2:8082')
} else {
  MK.start()
}

class form extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dirty: false,
    };
  }

  onBlur() {
    console.log('#####: onBlur');
  }

  render() {
    return (
      <View style={styles.container}>
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            value='john@email.com'
            onBlur={this.onBlur}
          >Email</FloatingLabel>
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            onBlur={this.onBlur}
            style={styles.formInput}
          >First Name</FloatingLabel>
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            onBlur={this.onBlur}
            style={styles.formInput}
          >Last Name</FloatingLabel>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    color: '#673AB7',
  },
  formInput: {
    borderBottomWidth: 1.5,
    marginLeft: 20,
    borderColor: '#333',
  },
  input: {
    borderWidth: 0
  }
});

AppRegistry.registerComponent('floater', () => form);
