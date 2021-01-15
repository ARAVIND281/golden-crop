import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class Leaf1_1 extends Component {
  changeScreen1 = () => {
    this.props.navigation.navigate('Leaf2');
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
        <Text style={styles.headText}>CHLOROSIS</Text>
        <View style={{ marginTop: 20 }}></View>
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/e/ee/Sweetgum-leaf-interveinal-chlorosis.jpg',
          }}
        />
        <View style={{ marginTop: 20 }}></View>
        <Text
          style={{
            textAlign: 'left',
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20
          }}>
          TREATEMENT
        </Text>
        <View style={{ marginTop: 20 }}></View>
        <Text style={styles.bodyText}>
          Soil fertilization treatments produce the best results, but are
          usually the slowest to respond. Soil treatment is best done in early
          spring through mid-May.
        </Text>
        <Text style={styles.bodyText}>
          Apply a one-to-two inch layer of organic compost (acidic leaf mold),
          followed by three-to-four inches of organic mulch (composted
          woodchips). This will help to create more favorable soil conditions
          for roots to grow.
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
