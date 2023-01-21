import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default function Movements({ data }) {
  return (
    <TouchableOpacity styles={styles.container}>
      <Text style={styles.date}>{data.date}</Text>

      <View styles={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        <Text style={styles.value}>
          {data.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})