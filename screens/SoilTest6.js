import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class SoilTest6 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('SoilTest7');
  };

  changeScreen2 = () => {
    this.props.navigation.navigate('SoilTest6_1');
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#d3d3d3', flex: 1 }}>
        <View>
          <Header
            centerComponent={{ text: 'GOLDEN CROP', style: { color: '#028910', fontSize: RFValue(20), fontWeight: "bold", } }}
            rightComponent={<Text style={{
              fontSize: RFValue(30),
              fontWeight: 'bold',
            }}
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}>🏠</Text>}
            leftComponent={<Image
              style={{ height: 50, width: 50 }}
              source={require('../image.png')}
            />}
            backgroundColor="gold"
          />
        </View>
        <View style={{ marginTop: 10 }} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          Test 6
        </Text>
        <View style={{ marginTop: 20 }}></View>
        <Text style={{ marginLeft: 25, marginRight: 25, textAlign: 'justify', fontSize: 18 }}>
          Add a handful of soil to a transparent container, add water, shake
          well and then leave to settle for 12 hours.Is the water quite clear
          with layered particles on the bottom of the container with the finest
          particle at the top . Is your soil, a relatively even mix of sand,
          silt and clay.
        </Text>
        <View style={{ marginTop: 15 }}></View>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>(or)</Text>
        <View style={{ marginTop: 15 }}></View>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          👇Your soil look like this👇
        </Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://cdn1.byjus.com/wp-content/uploads/2018/11/Types-of-Soil-Loamy-Soil.png',
          }}
        />
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity style={styles.yes} onPress={this.changeScreen2}>
            <Text style={styles.nextText}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.no} onPress={this.changeScreen1}>
            <Text style={styles.nextText}>NO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginLeft: -80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  no: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 10,
    width: 80,
    alignSelf: 'center',
    marginTop: -40,
    marginLeft: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
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
