import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class SoilTest2 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('SoilTest3');
  };

  changeScreen2 = () => {
    this.props.navigation.navigate('SoilTest2_1');
  };

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
          Test 2
        </Text>
        <Text style={{ marginLeft: 25, marginRight: 25, textAlign: 'justify' }}>
          Add a handful of soil to a transparent container, add water, shake
          well and then leave to settle for 12 hours. Is the water clear and
          most of the particles will fall, forming a layer on the base of the
          container. Does your soil feel gritty.
        </Text>
        <Text style={{ textAlign: 'center' }}>(or)</Text>
        <Text style={{ textAlign: 'center' }}>
          👇Your soil look like this👇
        </Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://cdn1.byjus.com/wp-content/uploads/2018/11/Types-of-Soil-sand.png',
          }}
        />
        <form>
          <TouchableOpacity style={styles.yes} onPress={this.changeScreen2}>
            <Text style={styles.nextText}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.no} onPress={this.changeScreen1}>
            <Text style={styles.nextText}>NO</Text>
          </TouchableOpacity>
        </form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  yes: {
    backgroundColor: 'green',
    height: 40,
    borderRadius: 10,
    width: 80,
    alignSelf: 'center',
    marginLeft: 80,
    marginTop: 15,
  },
  no: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 10,
    width: 80,
    alignSelf: 'center',
    marginTop: -40,
    marginLeft: 175,
  },
  nextText: {
    textAlign: 'center',
    fontSize: 23,
  },
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
