import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

const ListItem = ({ data, onDelete }) => {
  const handleDelete = () => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => onDelete(data.id),
        style: "destructive",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.text}</Text>
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteButton}>X</Text>
        </TouchableOpacity>
      </View>
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
  deleteButtonContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
});

export default ListItem;
