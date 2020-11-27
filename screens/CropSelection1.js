import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  DropdownButton,
  TouchableOpacity,
  Image,
} from 'react-native';
import Select from 'react-select';
import NumInput from 'react-numeric-input';

export default class CropSelection1 extends Component {
  constructor() {
    super();
    this.state = {
      SelectedSoiltype: null,
      SelectedSeasontype: null,
      o: 0,
    };
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
  }
  onValueChange1(event) {
    this.setState({
      SelectedSoiltype: event.target.value,
    });
  }

  onValueChange2(event) {
    this.setState({
      SelectedSeasontype: event.target.value,
    });
  }

  nextScreen = () => {
    if (
      this.state.SelectedSoiltype === 'Clay Soil' &&
      this.state.SelectedSeasontype === 'Summer'
    ) {
      this.props.navigation.navigate('SummerClay');
    } else if (
      this.state.SelectedSoiltype === 'Sandy Soil' &&
      this.state.SelectedSeasontype === 'Summer'
    ) {
      this.props.navigation.navigate('SummerSandy');
    } else if (
      this.state.SelectedSoiltype === 'Silt Soil' &&
      this.state.SelectedSeasontype === 'Summer'
    ) {
      this.props.navigation.navigate('SummerSilt');
    } else if (
      this.state.SelectedSoiltype === 'Peat Soil' &&
      this.state.SelectedSeasontype === 'Summer'
    ) {
      this.props.navigation.navigate('SummerPeat');
    } else if (
      this.state.SelectedSoiltype === 'Chalky Soil' &&
      this.state.SelectedSeasontype === 'Summer'
    ) {
      this.props.navigation.navigate('SummerChalky');
    } else if (
      this.state.SelectedSoiltype === 'Loamy Soil' &&
      this.state.SelectedSeasontype === 'Summer'
    ) {
      this.props.navigation.navigate('SummerLoamy');
    } else if (
      this.state.SelectedSoiltype === 'Clay Soil' &&
      this.state.SelectedSeasontype === 'Spring'
    ) {
      this.props.navigation.navigate('MonsoonClay');
    } else if (
      this.state.SelectedSoiltype === 'Sandy Soil' &&
      this.state.SelectedSeasontype === 'Spring'
    ) {
      this.props.navigation.navigate('MonsoonSandy');
    } else if (
      this.state.SelectedSoiltype === 'Silt Soil' &&
      this.state.SelectedSeasontype === 'Spring'
    ) {
      this.props.navigation.navigate('MonsoonSilt');
    } else if (
      this.state.SelectedSoiltype === 'Peat Soil' &&
      this.state.SelectedSeasontype === 'Spring'
    ) {
      this.props.navigation.navigate('MonsoonPeat');
    } else if (
      this.state.SelectedSoiltype === 'Chalky Soil' &&
      this.state.SelectedSeasontype === 'Spring'
    ) {
      this.props.navigation.navigate('MonsoonChalky');
    } else if (
      this.state.SelectedSoiltype === 'Loamy Soil' &&
      this.state.SelectedSeasontype === 'Spring'
    ) {
      this.props.navigation.navigate('MonsoonLoamy');
    } else if (
      this.state.SelectedSoiltype === 'Sandy Soil' &&
      this.state.SelectedSeasontype === 'Winter'
    ) {
      this.props.navigation.navigate('WinterSandy');
    } else if (
      this.state.SelectedSoiltype === 'Silt Soil' &&
      this.state.SelectedSeasontype === 'Winter'
    ) {
      this.props.navigation.navigate('WinterSilt');
    } else if (
      this.state.SelectedSoiltype === 'Peat Soil' &&
      this.state.SelectedSeasontype === 'Winter'
    ) {
      this.props.navigation.navigate('WinterPeat');
    } else if (
      this.state.SelectedSoiltype === 'Chalky Soil' &&
      this.state.SelectedSeasontype === 'Winter'
    ) {
      this.props.navigation.navigate('WinterChalky');
    } else if (
      this.state.SelectedSoiltype === 'Loamy Soil' &&
      this.state.SelectedSeasontype === 'Winter'
    ) {
      this.props.navigation.navigate('WinterLoamy');
    } else if (
      this.state.SelectedSoiltype === 'Clay Soil' &&
      this.state.SelectedSeasontype === 'Winter'
    ) {
      this.props.navigation.navigate('WinterClay');
    }
  };

  updateO = (o) => this.setState({ o });

  render() {
    const { o } = this.state;
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
        <View style={styles.soilType}>
          <Text style={styles.type}> SOIL TYPE</Text>
        </View>
        <View style={styles.soilType1}>
          <form>
            <div>
              <label>
                <input
                  type="radio"
                  value="Clay Soil"
                  checked={this.state.SelectedSoiltype === 'Clay Soil'}
                  onChange={this.onValueChange1}
                />
                Clay Soil
              </label>

              <label>
                <input
                  type="radio"
                  value="Sandy Soil"
                  checked={this.state.SelectedSoiltype === 'Sandy Soil'}
                  onChange={this.onValueChange1}
                />
                Sandy Soil
              </label>

              <label>
                <input
                  type="radio"
                  value="Silt Soil"
                  checked={this.state.SelectedSoiltype === 'Silt Soil'}
                  onChange={this.onValueChange1}
                />
                Silt Soil
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Peat Soil"
                  checked={this.state.SelectedSoiltype === 'Peat Soil'}
                  onChange={this.onValueChange1}
                />
                Peat Soil
              </label>

              <label>
                <input
                  type="radio"
                  value="Chalky Soil"
                  checked={this.state.SelectedSoiltype === 'Chalky Soil'}
                  onChange={this.onValueChange1}
                />
                Chalky Soil
              </label>

              <label>
                <input
                  type="radio"
                  value="Loamy Soil"
                  checked={this.state.SelectedSoiltype === 'Loamy Soil'}
                  onChange={this.onValueChange1}
                />
                Loamy Soil
              </label>
            </div>
          </form>
        </View>
        <View style={styles.season1}>
          <Text style={styles.type}> SEASON</Text>
        </View>
        <View style={styles.season}>
          <form>
            <div>
              <label>
                <input
                  type="radio"
                  value="Summer"
                  checked={this.state.SelectedSeasontype === 'Summer'}
                  onChange={this.onValueChange2}
                />
                Summer
              </label>

              <label>
                <input
                  type="radio"
                  value="Spring"
                  checked={this.state.SelectedSeasontype === 'Spring'}
                  onChange={this.onValueChange2}
                />
                Spring
              </label>

              <label>
                <input
                  type="radio"
                  value="Winter"
                  checked={this.state.SelectedSeasontype === 'Winter'}
                  onChange={this.onValueChange2}
                />
                Winter
              </label>
            </div>
          </form>
        </View>
        <View style={styles.druation1}>
          <Text style={styles.type}> DURATION</Text>
        </View>
        <View style={styles.druation}>
          <form>
            <NumInput
              style={{ width: 100 }}
              format={(o) => `${o}`}
              value={o}
              onChange={this.updateO}
              max="18"
              min="0"
            />
            <Text>MONTH</Text>
          </form>
        </View>
        <View style={styles.waterLevel}>
          <form>
            <Text>WATER LEVEL:</Text>

            <select id="dropdown" value={this.state.waterLevel}>
              <option value="SELECTCROP" disabled="true">
                -- SELECT SOIL TYPE --
              </option>
              <option value="High ">High</option>
              <option value="Medium ">Medium</option>
              <option value="Low">Low</option>
            </select>
          </form>
        </View>
        <div style={{ marginTop: 10 }}>
          Your Soil Type is {this.state.SelectedSoiltype}
        </div>
        <div style={{ marginTop: 10 }}>
          Your SEASON is {this.state.SelectedSeasontype}
        </div>
        <View>
          <TouchableOpacity style={styles.next} onPress={this.nextScreen}>
            <Text style={styles.nextText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  soilType: {
    marginTop: 30,
    marginLeft: 10,
    backgroundColor: '#B91372',
    marginRight: '70%',
    width: 80,
  },
  season1: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#B91372',
    marginRight: '75%',
    width: 65,
  },
  druation1: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#B91372',
    marginRight: '70%',
    width: 85,
  },
  soilType1: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  waterLevel: {
    alignSelf: 'center',
    marginTop: 20,
  },
  druation: {
    alignSelf: 'center',
    marginTop: 10,
  },
  season: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 30,
  },
  next: {
    backgroundColor: 'red',
    height: 20,
    borderRadius: 10,
    marginTop: '10%',
    width: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nextText: {
    textAlign: 'center',
    fontSize: 15,
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
  type: { color: '#ffffff', fontWeight: 'bold' },
});
