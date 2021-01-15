import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,ScrollView
} from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class Stem1 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('Stem2');
  };

  changeScreen2 = () => {
    this.props.navigation.navigate('Stem1_1');
  };

  render() {
    return (
      <ScrollView style={styles.background}>
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
        <View style={{ marginTop: 10 }}></View>
        <Text style={styles.headText}>GALL</Text>
        <View style={{ marginTop: 20 }}></View>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://d1u82yn7miridg.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY29udGVudC1hcnRpY2xlc1wvaW1hZ2VzXC9ib2R5XC9hNTA0NWNmMDQxOWU5YTllNzFhOTMwYjYwNjY3MTZkY2UyYWM0NzZmXzYwMHg3MzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3MDAsImZpdCI6ImNvdmVyIn19fQ==',
          }}
        />
        <View style={{ marginTop: 20 }}></View>
        <Text style={styles.bodyText}>
          Galls are abnormal growths that occur on leaves, twigs, roots, or
          flowers of many plants. Most galls are caused by stimulation of plant
          cells due to feeding or egg-laying by insects.
        </Text>
        <View style={{ marginTop: 40 }}></View>
        <TouchableOpacity style={styles.yes} onPress={this.changeScreen2}>
          <Text style={styles.nextText}>YES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.no} onPress={this.changeScreen1}>
          <Text style={styles.nextText}>NO</Text>
        </TouchableOpacity>
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
  background: {
    backgroundColor: '#98EDC3',
    flex: 1
  },
  headText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 23,
    fontWeight: 'bold',
  },
  bodyText: {
    marginLeft: 25,
    marginRight: 25,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 19,
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
