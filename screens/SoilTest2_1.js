import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,ScrollView
} from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export default class SoilTest2_1 extends Component {
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
        <View style={{ marginTop: 20 }} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          Test Result
        </Text>
        <View style={{ marginTop: 20 }} />
        <Image
          style={{ width: 150, height: 150, alignSelf: 'center' }}
          source={{
            uri:
              'https://cdn1.byjus.com/wp-content/uploads/2018/11/Types-of-Soil-sand.png',
          }}
        />
        <View style={{ marginTop: 20 }} />
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}> Your Soil is Sandy Soil</Text>
        <View style={{ marginTop: 20 }} />
        <Text
          style={{
            marginLeft: 25,
            marginRight: 25,
            textAlign: 'justify',
            fontSize: 18,
          }}>
          It drains easily, dries out fast and is easy to cultivate.Sandy soil
          requires organic amendments such as glacial rock dust, greensand, kelp
          meal, or other organic fertilizer blends. It also benefits from
          mulching to help retain moisture.
        </Text>
      </ScrollView>
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
