import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const TextInputBar = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleAddTask = () => {
    if (text.trim() !== "") {
      onAddTask(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Type here..."
      />
      <TouchableOpacity
        style={[styles.addButton, { opacity: text.trim() === "" ? 0.5 : 1 }]}
        onPress={handleAddTask}
        disabled={text.trim() === ""}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "gray",
    height: 40,
    width: "18%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default TextInputBar;
