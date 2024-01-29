import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import TextInputBar from "../components/TextInputBar";

const ToDoScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { text: newTask }]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => <ListItem data={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.inputContainer}>
        <TextInputBar onAddTask={addTask} />
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ToDoScreen;
