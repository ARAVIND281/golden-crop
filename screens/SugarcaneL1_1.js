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

export default class SugarcaneL1_1 extends Component {
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
        <Text style={styles.headText}>Yellow Leaf disease</Text>
        <View style={{ marginTop: 20 }}></View>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'http://agritech.tnau.ac.in/crop_protection/images/sugarcane_diseases/1.2.jpg',
          }}
        />
        <View style={{ marginTop: 20 }}></View>
        <Text
          style={{
            textAlign: 'left',
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          TREATEMENT
        </Text>
        <View style={{ marginTop: 20 }}></View>
        <Text style={styles.bodyText}>
          Secondary transmission of the disease by insect vectors can be
          controlled by application of Malathion(0.1%) or Dimecron(0.2%). Two
          sprayings of malathion @ 1.5 kg /ha at monthly intervals during
          September and October after detrashing of dry leaves.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#98EDC3',
    height: '130%',
  },
  headText: {
    textAlign: 'center',
    color: 'red',
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
