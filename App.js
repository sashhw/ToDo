import { StyleSheet, View, Text } from "react-native";
import ToDoScreen from "./screens/ToDoScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <ToDoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 20,
  },
});
