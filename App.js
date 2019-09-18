import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: ['rgb(0, 0, 0)', 'rgb(51, 250, 170)']
    });
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [{ translateY: this.animatedValue }]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
    height: 150
  }
});
