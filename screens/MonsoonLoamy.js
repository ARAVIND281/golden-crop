import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Blink from 'react-blink-text';

export default class MonsoonLoamy extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFE2CF', height: '150%' }}>
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
                <th>Wheat</th>
                <th>60 to 150 days</th>
              </tr>
            </thead>
          </table>
        </View>
        <View style={{ backgroundColor: 'skyblue' }}>
          <table>
            <thead>
              <tr>
                <th>Sugarcane</th>
                <th>12 to 18 months</th>
              </tr>
            </thead>
          </table>
        </View>
        <View style={{ backgroundColor: 'yellow' }}>
          <table>
            <thead>
              <tr>
                <th>Onion</th>
                <th>80 to 150 days</th>
              </tr>
            </thead>
          </table>
        </View>
        <View style={{ backgroundColor: 'lightgreen' }}>
          <table>
            <thead>
              <tr>
                <th>Pepper</th>
                <th>60-90 days</th>
              </tr>
            </thead>
          </table>
        </View>
        <View style={{ backgroundColor: 'skyblue' }}>
          <table>
            <thead>
              <tr>
                <th>Green beans</th>
                <th>50 to 55 days</th>
              </tr>
            </thead>
          </table>
        </View>
        <View style={{ backgroundColor: 'yellow' }}>
          <table>
            <thead>
              <tr>
                <th>Cucumber</th>
                <th>50 to 70 days</th>
              </tr>
            </thead>
          </table>
        </View>
        <View style={{ backgroundColor: 'lightgreen' }}>
          <table>
            <thead>
              <tr>
                <th>Lettuce</th>
                <th>45 to 55 days</th>
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
