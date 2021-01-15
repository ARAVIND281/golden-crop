import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Picker,
  ScrollView
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Header, ButtonGroup } from 'react-native-elements';

export default class CropSelection1 extends Component {
  constructor() {
    super();
    this.state = {
      SelectedSoiltype: null,
      SelectedSeasontype: null,
      o: 0,
      soilType: null,
      selectedSeason: null,
      selectedSeasonName: null,
      color: null,
      Druation: 0,
      selectedIndex: null,
      druationColor: null,
    };
    this.updateDruation = this.updateDruation.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedSeason) {
    this.setState({ selectedSeason })
    if (selectedSeason == 0) {
      this.setState({
        selectedSeasonName: 'Summer',
        color: 'orange',
        SelectedSeasontype:'Summer'
      })
    }
    if (selectedSeason == 1) {
      this.setState({
        selectedSeasonName: 'Spring',
        color: '#41980A',
        SelectedSeasontype:'Spring'
      })
    }
    if (selectedSeason == 2) {
      this.setState({
        selectedSeasonName: 'Winter',
        color: 'skyblue',
        SelectedSeasontype:'Winter'
      })
    }
  }

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
    var druation = this.state.Druation
    const { selectedIndex } = this.state
    const { selectedSeason } = this.state
    return (
      <ScrollView style={{ backgroundColor: '#f0dc82', flex: 1 }}>
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
        <View style={[styles.soilType,{width:'30%'}]}>
          <Text style={styles.type}> SOIL TYPE</Text>
        </View>
        <View style={styles.soilType1}>
          <View style={styles.Picker}>
            <Picker
              selectedValue={this.state.SelectedSoiltype}
              style={{ height: RFValue(50), width: RFValue(250) }}
              onValueChange={(itemValue, itemIndex) => { this.setState({ SelectedSoiltype: itemValue }) }}
            >
              <Picker.Item label="SELECT SOIL TYPE" value="SELECT SOIL TYPE" />
              <Picker.Item label="Clay Soil" value="Clay Soil" />
              <Picker.Item label="Sandy Soil" value="Sandy Soil" />
              <Picker.Item label="Silt Soil" value="Silt Soil" />
              <Picker.Item label="Peat Soil" value="Peat Soil" />
              <Picker.Item label="Chalky Soil" value="Chalky Soil" />
              <Picker.Item label="Loamy Soil" value="Loamy Soil" />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: '10%' }}></View>
        <View style={[styles.season1,{width:'25%'}]}>
          <Text style={styles.type}> SEASON</Text>
        </View>
        <View style={{ marginLeft: RFValue(10) }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedSeason}
            buttons={['Summer', 'Spring', 'Winter']}
            containerStyle={{ height: RFValue(50), borderRadius: RFValue(10) }}
            selectedButtonStyle={{ backgroundColor: this.state.color }}
          />
        </View>
        <View style={[styles.druation1,{width:'50%'}]}>
          <Text style={styles.type}> {'DURATION(Month)'}</Text>
        </View>
        <View style={{ marginLeft: RFValue(10) }}>
          <ButtonGroup
            onPress={this.updateDruation}
            buttons={['-', druation, '+']}
            selectedIndex={selectedIndex}
            containerStyle={{ height: RFValue(50), borderRadius: RFValue(10), width: '60%' }}
            selectedButtonStyle={{ backgroundColor: this.state.druationColor }}
          />
        </View>
        <View style={{ marginTop: '10%' }}></View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(16.5) }}>Your Soil Type is {this.state.SelectedSoiltype}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: RFValue(16.5) }}>Your Season is {this.state.SelectedSeasontype}</Text>
        </View>
        <View style={{ marginTop: '15%' }}>
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
          }]} onPress={this.nextScreen}>
            <Text style={[styles.nextText, {
              color: "#028910",
              fontWeight: "bold",
              fontSize: RFValue(30),
            }]}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    width: 130,
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
    width: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nextText: {
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
  type: { color: '#ffffff', fontWeight: 'bold' },
});
/*
<View style={styles.druation}>
          <NumInput
            style={{ width: 100 }}
            format={(o) => `${o}`}
            value={o}
            onChange={this.updateO}
            max="18"
            min="0"
          />
          <Text>MONTH</Text>
        </View>

        <View style={styles.waterLevel}>
          <Text>WATER LEVEL:</Text>

          <select id="dropdown" value={this.state.waterLevel}>
            <option value="SELECTCROP" disabled="true">
              -- SELECT SOIL TYPE --
              </option>
            <option value="High ">High</option>
            <option value="Medium ">Medium</option>
            <option value="Low">Low</option>
          </select>
        </View>*/
/*
<ButtonGroup
    onPress={this.updateDruation}
    buttons={['-', druation, '+']}
    selectedIndex={selectedIndex}
    containerStyle={{ height: RFValue(50), borderRadius: RFValue(10), width: '60%' }}
    selectedButtonStyle={{ backgroundColor: this.state.druationColor }}
  />
*/