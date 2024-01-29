import { Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const AddButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>+</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    height: 40,
    width: "18%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "300",
    color: "white",
  },
});

export default AddButton;
