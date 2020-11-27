import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class SugarcaneS2 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('CropTreatmentNo');
  };

  changeScreen2 = () => {
    this.props.navigation.navigate('SugarcaneS2_1');
  };

  render() {
    return (
      <View style={styles.background}>
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
        <Text style={styles.headText}>Sett rot</Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'http://agritech.tnau.ac.in/crop_protection/images/sugarcane_diseases/7.1.jpg',
          }}
        />
        <Text style={styles.bodyText}>
          If the affected shoots and setts are examined do you find discoloured
          central portion of the shoots and the contents of the sett rotting.
          When split opened, the affected setts exhibit pineapple odour.
        </Text>
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
  background: {
    backgroundColor: '#00ff00',
    height: '100%',
  },
  headText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Castellar',
  },
  bodyText: {
    marginLeft: 25,
    marginRight: 25,
    textAlign: 'justify',
    fontFamily: 'Lucida Calligraphy',
    fontWeight: 'bold',
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
