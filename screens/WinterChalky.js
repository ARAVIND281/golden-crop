import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Blink from 'react-blink-text';

export default class WinterChalky extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFE2CF', height: '300%' }}>
        <View style={styles.textContainer}>
          <Image
            style={{ height: 50, width: 50, marginTop: 10, marginLeft: 10 }}
            source={require('../image.png')}
          />
          <Text style={styles.text}>GOLDEN CROP</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.home}>🏠</Text>
          </TouchableOpacity>
        </View>
        <Blink
          color="blue"
          text="CROP FOR YOUR SOIL"
          fontSize="100"
          textAlign="center"
          fontWeight="bold">
          CROP FOR YOUR SOIL
        </Blink>
        <table>
          <thead>
            <tr>
              <th>Plant Name</th>
              <th>Duration</th>
            </tr>
          </thead>
        </table>
        <View style={{ backgroundColor: 'lightgreen', marginTop: 5 }}>
          <table>
            <thead>
              <tr>
                <th>Spinach</th>
                <th>6 weeks</th>
              </tr>
            </thead>
          </table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'gold',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -60,
  },
  home: {
    color: 'white',
    padding: 20,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: -75,
  },
});