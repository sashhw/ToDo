import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import TextInputBar from "../components/TextInputBar";
import AddButton from "../components/AddButton";

const ToDoScreen = () => {
  const tasks = [
    { id: "1", title: "do dishes" },
    { id: "2", title: "get groceries" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={(task) => task.id}
      />
      <View style={styles.inputContainer}>
        <TextInputBar />
        <AddButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
  },
});

export default ToDoScreen;
