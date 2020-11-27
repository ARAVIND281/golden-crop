import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
import CropSelection1 from './screens/CropSelection1';
import CropTreatment1 from './screens/CropTreatment1';
import SoilTest1 from './screens/SoilTest1';
import SoilTest1_1 from './screens/SoilTest1_1';
import SoilTest2 from './screens/SoilTest2';
import SoilTest2_1 from './screens/SoilTest2_1';
import SoilTest3 from './screens/SoilTest3';
import SoilTest3_1 from './screens/SoilTest3_1';
import SoilTest4 from './screens/SoilTest4';
import SoilTest4_1 from './screens/SoilTest4_1';
import SoilTest5 from './screens/SoilTest5';
import SoilTest5_1 from './screens/SoilTest5_1';
import SoilTest6 from './screens/SoilTest6';
import SoilTest7 from './screens/SoilTest7';
import SoilTest6_1 from './screens/SoilTest6_1';
import Leaf1 from './screens/Leaf1';
import Leaf1_1 from './screens/Leaf1_1';
import Leaf3 from './screens/Leaf3';
import Leaf3_1 from './screens/Leaf3_1';
import Leaf4 from './screens/Leaf4';
import Leaf4_1 from './screens/Leaf4_1';
import Leaf5 from './screens/Leaf5';
import Leaf5_1 from './screens/Leaf5_1';
import Leaf6 from './screens/Leaf6';
import Leaf6_1 from './screens/Leaf6_1';
import Leaf7 from './screens/Leaf7';
import Leaf7_1 from './screens/Leaf7_1';
import Stem1 from './screens/Stem1';
import Stem1_1 from './screens/Stem1_1';
import Stem2 from './screens/Stem2';
import Stem2_1 from './screens/Stem2_1';
import Stem3 from './screens/Stem3';
import Stem3_1 from './screens/Stem3_1';
import Stem4 from './screens/Stem4';
import Stem4_1 from './screens/Stem4_1';
import Stem5 from './screens/Stem5';
import Stem5_1 from './screens/Stem5_1';
import PaddyL1 from './screens/PaddyL1';
import PaddyL1_1 from './screens/PaddyL1_1';
import PaddyL2 from './screens/PaddyL2';
import PaddyL2_1 from './screens/PaddyL2_1';
import PaddyL3 from './screens/PaddyL3';
import PaddyL3_1 from './screens/PaddyL3_1';
import GroundnutL1 from './screens/GroundnutL1';
import GroundnutL1_1 from './screens/GroundnutL1_1';
import GroundnutL2 from './screens/GroundnutL2';
import GroundnutL2_1 from './screens/GroundnutL2_1';
import GroundnutS1 from './screens/GroundnutS1';
import GroundnutS1_1 from './screens/GroundnutS1_1';
import GroundnutS2 from './screens/GroundnutS2';
import GroundnutS2_1 from './screens/GroundnutS2_1';
import CottonL1 from './screens/CottonL1';
import CottonL1_1 from './screens/CottonL1_1';
import CottonL2 from './screens/CottonL2';
import CottonL2_1 from './screens/CottonL2_1';
import CottonS1 from './screens/CottonS1';
import CottonS1_1 from './screens/CottonS1_1';
import CottonS2 from './screens/CottonS2';
import CottonS2_1 from './screens/CottonS2_1';
import SugarcaneL1 from './screens/SugarcaneL1';
import SugarcaneL1_1 from './screens/SugarcaneL1_1';
import SugarcaneL2 from './screens/SugarcaneL2';
import SugarcaneL2_1 from './screens/SugarcaneL2_1';
import SugarcaneS1 from './screens/SugarcaneS1';
import SugarcaneS1_1 from './screens/SugarcaneS1_1';
import SugarcaneS2 from './screens/SugarcaneS2';
import SugarcaneS2_1 from './screens/SugarcaneS2_1';
import SummerClay from './screens/SummerClay';
import CropTreatmentNo from './screens/CropTreatmentNo';
import SummerSandy from './screens/SummerSandy';
import SummerSilt from './screens/SummerSilt';
import SummerPeat from './screens/SummerPeat';
import SummerChalky from './screens/SummerChalky';
import SummerLoamy from './screens/SummerLoamy';
import MonsoonClay from './screens/MonsoonClay';
import MonsoonSandy from './screens/MonsoonSandy';
import MonsoonSilt from './screens/MonsoonSilt';
import MonsoonPeat from './screens/MonsoonPeat';
import MonsoonChalky from './screens/MonsoonChalky';
import MonsoonLoamy from './screens/MonsoonLoamy';
import WinterClay from './screens/WinterClay';
import WinterSandy from './screens/WinterSandy';
import WinterSilt from './screens/WinterSilt';
import WinterPeat from './screens/WinterPeat';
import WinterChalky from './screens/WinterChalky';
import WinterLoamy from './screens/WinterLoamy';
import Intro from './screens/Intro';

export default function App() {
  return (
    <AppContainer />
  );
}

var AppNavigator = createSwitchNavigator({
  Intro:Intro,
  HomeScreen: HomeScreen,
  //CropSelection1: CropSelection1,
  //CropTreatment1: CropTreatment1,
  /*SoilTest1: SoilTest1,
  SoilTest1_1: SoilTest1_1,
  SoilTest2: SoilTest2,
  SoilTest2_1: SoilTest2_1,
  SoilTest3: SoilTest3,
  SoilTest3_1: SoilTest3_1,
  SoilTest4: SoilTest4,
  SoilTest4_1: SoilTest4_1,
  SoilTest5: SoilTest5,
  SoilTest5_1: SoilTest5_1,
  SoilTest6: SoilTest6,
  SoilTest6_1: SoilTest6_1,
  SoilTest7: SoilTest7,
  Leaf1: Leaf1,
  Leaf1_1: Leaf1_1,
  Leaf3: Leaf3,
  Leaf3_1: Leaf3_1,
  Leaf4: Leaf4,
  Leaf4_1: Leaf4_1,
  Leaf5: Leaf5,
  Leaf5_1: Leaf5_1,
  Leaf6: Leaf6,
  Leaf6_1: Leaf6_1,
  Leaf7: Leaf7,
  Leaf7_1: Leaf7_1,
  Stem1: Stem1,
  Stem1_1: Stem1_1,
  Stem2: Stem2,
  Stem2_1: Stem2_1,
  Stem3: Stem3,
  Stem3_1: Stem3_1,
  Stem4: Stem4,
  Stem4_1: Stem4_1,
  Stem5: Stem5,
  Stem5_1: Stem5_1,
  PaddyL1: PaddyL1,
  PaddyL1_1: PaddyL1_1,
  PaddyL2: PaddyL2,
  PaddyL2_1: PaddyL2_1,
  PaddyL3: PaddyL3,
  PaddyL3_1: PaddyL3_1,
  PaddyS1: PaddyL1,
  PaddyS1_1: PaddyL1_1,
  PaddyS2: PaddyL2,
  PaddyS2_1: PaddyL2_1,
  PaddyS3: PaddyL3,
  PaddyS3_1: PaddyL3_1,
  GroundnutL1: GroundnutL1,
  GroundnutL1_1: GroundnutL1_1,
  GroundnutL2: GroundnutL2,
  GroundnutL2_1: GroundnutL2_1,
  GroundnutS1: GroundnutS1,
  GroundnutS1_1: GroundnutS1_1,
  GroundnutS2: GroundnutS2,
  GroundnutS2_1: GroundnutS2_1,
  CottonL1: CottonL1,
  CottonL1_1: CottonL1_1,
  CottonL2: CottonL2,
  CottonL2_1: CottonL2_1,
  CottonS1: CottonS1,
  CottonS1_1: CottonS1_1,
  CottonS2: CottonS2,
  CottonS2_1: CottonS2_1,
  SugarcaneL1: SugarcaneL1,
  SugarcaneL1_1: SugarcaneL1_1,
  SugarcaneL2: SugarcaneL2,
  SugarcaneL2_1: SugarcaneL2_1,
  SugarcaneS1: SugarcaneS1,
  SugarcaneS1_1: SugarcaneS1_1,
  SugarcaneS2: SugarcaneS2,
  SugarcaneS2_1: SugarcaneS2_1,
  CropTreatmentNo: CropTreatmentNo,
  SummerClay: SummerClay,
  SummerSandy: SummerSandy,
  SummerSilt: SummerSilt,
  SummerPeat: SummerPeat,
  SummerChalky: SummerChalky,
  SummerLoamy: SummerLoamy,
  MonsoonClay: MonsoonClay,
  MonsoonSandy: MonsoonSandy,
  MonsoonSilt: MonsoonSilt,
  MonsoonPeat: MonsoonPeat,
  MonsoonChalky: MonsoonChalky,
  MonsoonLoamy: MonsoonLoamy,
  WinterClay: WinterClay,
  WinterSandy: WinterSandy,
  WinterSilt: WinterSilt,
  WinterPeat: WinterPeat,
  WinterChalky: WinterChalky,
  WinterLoamy: WinterLoamy,*/
});

const AppContainer = createAppContainer(AppNavigator);
