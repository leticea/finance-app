import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

import { Feather } from "@expo/vector-icons";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; //espaçamento do android e ios(64)

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Meu app de finanças</Text>

        <TouchableOpacity>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: StatusBarHeight,
  }
})