import { View, StyleSheet, Text } from "react-native";

const ListItem = ({ title }) => (
  <View>
    <Text style={styles.title}> {title}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "200",
    fontSize: 20,
  },
});

export default ListItem;
