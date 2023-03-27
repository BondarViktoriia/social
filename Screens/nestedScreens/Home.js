import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnExit}>
        <Ionicons
          name="exit"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Login")}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.postsContainer}>
              <Image style={styles.postImage} source={{ uri: item.photo }} />
              <View>
                <Text style={styles.photoTitle}>{item.comment}</Text>
              </View>
              <View
                style={{ flex: 1, flexDirection: "row", marginHorizontal: 20 }}
              >
                <View>
                  <EvilIcons
                    onPress={() => navigation.navigate("CommentsScreen")}
                    name="comment"
                    size={32}
                    color="orange"
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <EvilIcons
                    onPress={() =>
                      navigation.navigate("MapScreen", {
                        location: item.location,
                      })
                    }
                    name="location"
                    size={32}
                    color="orange"
                  />
                </View>
              </View>
            </View>
          )}
        />
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
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  postImage: {
    marginHorizontal: 10,
    height: 200,
  },
  postsContainer: {
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: "center",
  },
  photoTitle: {
    textTransform: "uppercase",
    marginBottom: 10,
    marginHorizontal: -165,
    color: "black",
  },
});

export default Home;
