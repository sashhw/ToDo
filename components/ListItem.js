import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ListItem = ({ data }) => (
  <View>
    <Text style={styles.title}>{data.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "200",
    fontSize: 20,
  },
});

export default ListItem;
