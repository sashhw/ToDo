import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ListItem = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.text}</Text>
      <TouchableOpacity onPress={handleDelete}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  title: {
    fontWeight: "200",
    fontSize: 20,
  },
  deleteButton: {
    color: "red",
    marginLeft: 10,
  },
});

export default ListItem;
