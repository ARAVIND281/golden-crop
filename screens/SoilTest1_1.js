import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class SoilTest1_1 extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#d3d3d3' }}>
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
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          Test Result
        </Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://cdn1.byjus.com/wp-content/uploads/2018/11/Types-of-Soil-clay.png',
          }}
        />
        <Text style={{ textAlign: 'center' }}>Your Soil is Clay Soil</Text>
        <Text
          style={{
            marginLeft: 25,
            marginRight: 25,
            textAlign: 'justify',
          }}>
          If the drainage for the soil is enhanced, then plants will develop and
          grow well as clay soil can be rich in nutrients.
        </Text>
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
