import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import TextInputBar from "../components/TextInputBar";
import SearchBar from "../components/SearchBar";

const ToDoScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { id: idCounter, text: newTask }]);
    setIdCounter((prevId) => prevId + 1);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem data={item} onDelete={deleteTask} />
        )}
        keyExtractor={(item) => item.id.toString()}
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
