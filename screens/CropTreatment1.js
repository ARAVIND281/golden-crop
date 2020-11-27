import React, { Component } from 'react';
import Select from 'react-select';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import chroma from 'chroma-js';
import NumInput from 'react-numeric-input';

const cropProblem = [
  { value: 'LEAF', label: 'PROBLEM IN LEAF' },
  { value: 'STEM', label: 'PROBLEM IN STEM' },
];

export default class CropTreatment extends React.Component {
  state = {
    selectedcropName: null,
    o: 0,
    selectedcropProblem: null,
  };
  updateO = (o) => this.setState({ o });
  constructor() {
    super();

    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange1(event) {
    this.setState({
      selectedcropName: event.target.value,
    });
  }
  handleChange2 = (selectedcropProblem) => {
    this.setState({ selectedcropProblem });
  };

  test = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  changeScreen = () => {
    if (
      this.state.selectedcropProblem.value === 'LEAF' &&
      this.state.selectedcropName === 'OTHER'
    ) {
      this.props.navigation.navigate('Leaf1');
    } else if (
      this.state.selectedcropProblem.value === 'STEM' &&
      this.state.selectedcropName === 'OTHER'
    ) {
      this.props.navigation.navigate('Stem1');
    } else if (
      this.state.selectedcropProblem.value === 'STEM' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyS1');
    } else if (
      this.state.selectedcropProblem.value === 'LEAF' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyL1');
    } else if (
      this.state.selectedcropProblem.value === 'STEM' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyS1');
    } else if (
      this.state.selectedcropProblem.value === 'LEAF' &&
      this.state.selectedcropName === 'PADDY'
    ) {
      this.props.navigation.navigate('PaddyL1');
    } else if (
      this.state.selectedcropProblem.value === 'LEAF' &&
      this.state.selectedcropName === 'GROUNDNUT'
    ) {
      this.props.navigation.navigate('GroundnutL1');
    } else if (
      this.state.selectedcropProblem.value === 'STEM' &&
      this.state.selectedcropName === 'GROUNDNUT'
    ) {
      this.props.navigation.navigate('GroundnutS1');
    } else if (
      this.state.selectedcropProblem.value === 'LEAF' &&
      this.state.selectedcropName === 'COTTON'
    ) {
      this.props.navigation.navigate('CottonL1');
    } else if (
      this.state.selectedcropProblem.value === 'STEM' &&
      this.state.selectedcropName === 'COTTON'
    ) {
      this.props.navigation.navigate('CottonS1');
    } else if (
      this.state.selectedcropProblem.value === 'LEAF' &&
      this.state.selectedcropName === 'SUGARCANE'
    ) {
      this.props.navigation.navigate('SugarcaneL1');
    } else if (
      this.state.selectedcropProblem.value === 'STEM' &&
      this.state.selectedcropName === 'SUGARCANE'
    ) {
      this.props.navigation.navigate('SugarcaneS1');
    } else if (
      this.state.selectedcropProblem === null ||
      this.state.selectedcropName === null
    ) {
      //<Text>Select CropProblem and CropName</Text>;
    }
  };

  render() {
    const { selectedcropName } = this.state;
    const { selectedcropProblem } = this.state;

    return (
      <View style={{ backgroundColor: '#f0dc82' }}>
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
        <Text style={styles.cropName1}> CROP NAME</Text>
        <View style={styles.cropName}>
          <form>
            <div>
              <label>
                <input
                  type="radio"
                  value="SUGARCANE"
                  checked={this.state.selectedcropName === 'SUGARCANE'}
                  onChange={this.handleChange1}
                />
                SUGARCANE
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="GROUNDNUT"
                  checked={this.state.selectedcropName === 'GROUNDNUT'}
                  onChange={this.handleChange1}
                />
                GROUNDNUT
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="PADDY"
                  checked={this.state.selectedcropName === 'PADDY'}
                  onChange={this.handleChange1}
                />
                PADDY
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="COTTON"
                  checked={this.state.selectedcropName === 'COTTON'}
                  onChange={this.handleChange1}
                />
                COTTON
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="OTHER"
                  checked={this.state.selectedcropName === 'OTHER'}
                  onChange={this.handleChange1}
                />
                OTHER
              </label>
            </div>
          </form>
        </View>
        <Text style={styles.problem1}> PROBLEM</Text>
        <View style={styles.problem}>
          <form>
            <Select
              value={selectedcropProblem}
              onChange={this.handleChange2}
              options={cropProblem}
            />
          </form>
        </View>
        <Text style={styles.cropAge}> CROP AGE</Text>
        <View style={styles.cropAge1}>
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
        </View>

        <View>
          <Text>YOUR CROP AGE: {this.state.o} MONTHS</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.next} onPress={this.changeScreen}>
            <Text style={styles.nextText}>NEXT</Text>
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
    marginTop: 100,
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
});
