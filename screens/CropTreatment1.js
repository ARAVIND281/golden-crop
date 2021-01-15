import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Picker,
  ScrollView
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Header, ButtonGroup } from 'react-native-elements';

const cropProblem = [
  { value: 'LEAF', label: 'PROBLEM IN LEAF' },
  { value: 'STEM', label: 'PROBLEM IN STEM' },
];

export default class CropTreatment extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedcropName: null,
      o: 0,
      selectedcropProblem: null,
      druationColor: '',
      Druation: 0,
      selectedIndex: null,
    };
    this.updateDruation = this.updateDruation.bind(this)
  }

  test = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  changeScreen = () => {
    if (
      this.state.selectedcropProblem === 'LEAF' &&
      this.state.selectedcropName === 'OTHER'
    ) {
      this.props.navigation.navigate('Leaf1');
    } else if (
      this.state.selectedcropProblem === 'STEM' &&
      this.state.selectedcropName === 'OTHER'
    ) {
      this.props.navigation.navigate('Stem1');
    } else if (
      this.state.selectedcropProblem === 'STEM' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyS1');
    } else if (
      this.state.selectedcropProblem === 'LEAF' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyL1');
    } else if (
      this.state.selectedcropProblem === 'STEM' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyS1');
    } else if (
      this.state.selectedcropProblem === 'LEAF' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyL1');
    } else if (
      this.state.selectedcropProblem === 'LEAF' &&
      this.state.selectedcropName === 'GROUNDNUT'
    ) {
      this.props.navigation.navigate('GroundnutL1');
    } else if (
      this.state.selectedcropProblem === 'STEM' &&
      this.state.selectedcropName === 'GROUNDNUT'
    ) {
      this.props.navigation.navigate('GroundnutS1');
    } else if (
      this.state.selectedcropProblem === 'LEAF' &&
      this.state.selectedcropName === 'COTTON'
    ) {
      this.props.navigation.navigate('CottonL1');
    } else if (
      this.state.selectedcropProblem === 'STEM' &&
      this.state.selectedcropName === 'COTTON'
    ) {
      this.props.navigation.navigate('CottonS1');
    } else if (
      this.state.selectedcropProblem === 'LEAF' &&
      this.state.selectedcropName === 'SUGARCANE'
    ) {
      this.props.navigation.navigate('SugarcaneL1');
    } else if (
      this.state.selectedcropProblem === 'STEM' &&
      this.state.selectedcropName === 'SUGARCANE'
    ) {
      this.props.navigation.navigate('SugarcaneS1');
    } else if (
      this.state.selectedcropProblem === null ||
      this.state.selectedcropName === null
    ) {
      return (
        alert('Select CropProblem and CropName')
      )
    }
  };
  updateDruation(selectedIndex) {
    this.setState({ selectedIndex })
    if (selectedIndex == 0) {
      this.setState({
        druationColor: 'red'
      })
      if (this.state.Druation >= 1) {
        this.setState({
          Druation: this.state.Druation - 1,
        })
      }
    }
    if (selectedIndex == 1) {
      this.setState({
        Druation: 0,
        druationColor: '#fff',
        selectedIndex: null
      })
    }
    if (selectedIndex == 2) {
      this.setState({
        Druation: this.state.Druation + 1,
        druationColor: 'green'
      })
    }
  }

  render() {
    var druation = this.state.Druation
    const { selectedIndex } = this.state
    return (
      <View style={{ backgroundColor: '#f0dc82', flex: 1 }}>
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
        <Text style={[styles.cropName1, { width: '38%' }]}> CROP NAME</Text>
        <View style={styles.cropName}>
          <View style={styles.Picker}>
            <Picker
              selectedValue={this.state.selectedcropName}
              style={{ height: RFValue(50), width: RFValue(250) }}
              onValueChange={(itemValue, itemIndex) => { this.setState({ selectedcropName: itemValue }) }}
            >
              <Picker.Item label="SELECT CROP NAME" value="SELECT CROP NAME" />
              <Picker.Item label="SUGARCANE" value="SUGARCANE" />
              <Picker.Item label="GROUNDNUT" value="GROUNDNUT" />
              <Picker.Item label="PADDY" value="PADDY" />
              <Picker.Item label="COTTON" value="COTTON" />
              <Picker.Item label="OTHER" value="OTHER" />
            </Picker>
          </View>
        </View>
        <Text style={[styles.problem1, { width: '33%' }]}> PROBLEM</Text>
        <View style={styles.problem}>
          <View style={styles.Picker}>
            <Picker
              selectedValue={this.state.selectedcropProblem}
              style={{ height: RFValue(50), width: RFValue(250) }}
              onValueChange={(itemValue, itemIndex) => { this.setState({ selectedcropProblem: itemValue }) }}
            >
              <Picker.Item label="SELECT PROBLEM" value="SELECT PROBLEM" />
              <Picker.Item label="PROBLEM IN STEM" value="STEM" />
              <Picker.Item label="PROBLEM IN LEAF" value="LEAF" />
            </Picker>
          </View>
        </View>
        <Text style={[styles.cropAge, { width: '32%' }]}> CROP AGE</Text>
        <View style={styles.cropAge1}>

        </View>

        <View>
          <View style={{ marginLeft: RFValue(10) }}>
            <ButtonGroup
              onPress={this.updateDruation}
              buttons={['-', druation, '+']}
              selectedIndex={selectedIndex}
              containerStyle={{ height: RFValue(50), borderRadius: RFValue(10), width: '60%' }}
              selectedButtonStyle={{ backgroundColor: this.state.druationColor }}
            />
            <Text>YOUR CROP AGE: {this.state.Druation} MONTHS</Text>
          </View>

        </View>
        <View>
          <TouchableOpacity style={[styles.next, {
            width: "50%",
            height: RFValue(50),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: RFValue(25),
            backgroundColor: "#ffff",
            shadowColor: "#000",
            marginBottom: RFValue(10),
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10.32,
            elevation: 16,
          }]} onPress={this.changeScreen}>
            <Text style={[styles.nextText, {
              color: "#028910",
              fontWeight: "bold",
              fontSize: RFValue(30),
            }]}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cropName1: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: '#B91372',
    marginRight: '68%',
    color: '#ffffff',
    fontWeight: 'bold',
    width: 100,
  },
  cropName: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  problem1: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: '#B91372',
    marginRight: '74%',
    color: '#ffffff',
    fontWeight: 'bold',
    width: 80,
  },
  problem: {
    //alignSelf: 'flex-start',
    marginLeft: 30,
  },
  cropAge: {
    marginTop: 50,
    marginLeft: 10,
    backgroundColor: '#B91372',
    marginRight: '72%',
    color: '#ffffff',
    fontWeight: 'bold',
    width: 80,
  },
  cropAge1: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  next: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    width: 80,
    alignSelf: 'center',
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
  Picker: {
    backgroundColor: '#fff',
    marginTop: RFValue(10),
    height: RFValue(50),
    width: RFValue(250),
    borderRadius: RFValue(10),
  },
});
/*
          <form>
            <NumInput
              type="number"
              format={(o) => `${o}`}
              value={this.state.o}
              onChange={this.updateO}
              max="18"
              min="0"
              width="50"
            />
            <Text>MONTHS</Text>
          </form>
*/
