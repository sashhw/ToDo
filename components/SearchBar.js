import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const SearchBar = () => {
  return (
    <View>
      <TextInput
        style={styles.searchBar}
        // onChangeText={ }
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
