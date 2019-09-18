import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', '10rad']
    });
    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Spinner</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});
