import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class App extends Component {
  componentWillMount() {
    // this.animatedValue = new Animated.Value(1);
    this.animatedValue = new Animated.Value(100);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      // toValue: 0.3,
      toValue: 150,
      duration: 3000,
      easing: Easing.bounce
    }).start();
  }

  render() {
    // const animatedStyle = { opacity: this.animatedValue };
    const animatedStyle = { height: this.animatedValue };
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
    backgroundColor: '#333',
    width: 100,
    height: 100
  }
});
