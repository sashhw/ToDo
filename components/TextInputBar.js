import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputBar = () => {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Type here..."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInputBar;
