import React from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const ToDoScreen = () => {
  const tasks = [
    { id: "1", title: "do dishes" },
    { id: "2", title: "get groceries" },
  ];

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={(task) => task.id}
      />
    </View>
  );
};

export default ToDoScreen;
