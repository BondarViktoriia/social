import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoConrtainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 120, height: 120 }}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.brnCamera}
          activeOpacity={0.7}
          onPress={takePhoto}
        >
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
      </Camera>
      <Text style={styles.downloadText}>Загрузите фото</Text>
      <TextInput
        style={styles.input}
        textAlign={"left"}
        placeholder={"Название..."}
        placeholderTextColor={"orange"}
      />
      <TextInput
        style={styles.input}
        textAlign={"left"}
        placeholder={"Местность..."}
        placeholderTextColor={"orange"}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  camera: {
    height: 300,
    marginTop: 120,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  brnCamera: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "transparent",
    height: 51,
    width: 60,
    marginHorizontal: 16,
  },
  downloadText: {
    marginTop: 8,
    marginHorizontal: 16,
    color: "#BDBDBD",
  },
  button: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "transparent",

    height: 51,
    marginHorizontal: 16,
  },
  btnText: {
    color: "orange",
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 2,
    height: 50,
    marginHorizontal: 16,
    borderColor: "orange",
    padding: 16,
    paddingLeft: 0,
    color: "black",
    marginTop: 32,
  },
  takePhotoConrtainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});

export default CreatePostsScreen;
