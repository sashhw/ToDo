import React, { useState } from "react";
import { View, FlatList, StyleSheet, TextInput, Text } from "react-native";
import ListItem from "../components/ListItem";
import TextInputBar from "../components/TextInputBar";

const ToDoScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { id: Date.now(), text: newTask }]);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.text.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText.trim() === ""
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search"
        />
      </View>
      <FlatList
        data={filteredTasks}
        renderItem={({ item }) => (
          <ListItem data={item} onDelete={deleteTask} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />
      <View style={styles.inputContainer}>
        <TextInputBar onAddTask={addTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flex: 1,
  },
  searchBarContainer: {
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default ToDoScreen;
