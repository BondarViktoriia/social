import { Text, View, StyleSheet, TouchableOpacity,FlatList,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
          setPosts(prevState => [...prevState, route.params])
    }
  },[route.params])
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnExit}>
        <Ionicons name="exit" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <View style={styles.postsContainer}>
          <Image style={styles.postImage} source={{uri:item.photo}}/>
        </View>} />
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
  },
  btnExit: {
    marginTop: 50,
    marginRight: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  postImage: {
    marginHorizontal: 10,
    height:200,
  },
  postsContainer: {
    marginHorizontal: 15,
    marginBottom:10,
    justifyContent: "center",
  }
});

export default PostsScreen;
