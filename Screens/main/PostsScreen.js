import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnExit}>
        <Ionicons name="exit" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text>PostsScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnExit: {
    marginTop: 50,
    marginRight: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default PostsScreen;
