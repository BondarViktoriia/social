import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function App() {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  const closeKeyboardBackdrop = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={closeKeyboardBackdrop}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/bgimage.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyBoard ? 20 : 300,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
              <View>
                <Text style={styles.inputText}>Login</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  onFocus={() => setIsShowKeyBoard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                  value={state.login}
                  placeholder="Логин"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  onFocus={() => setIsShowKeyBoard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                  value={state.email}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  secureTextEntry={isSecurePassword}
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecurePassword((prev) => !prev);
                      }}
                    >
                      <Text>{isSecurePassword ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                  }
                  iconPosition="right"
                  onFocus={() => setIsShowKeyBoard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  value={state.password}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "orange",
    height: 40,
    borderRadius: 6,
    color: "white",
  },
  form: {
    marginHorizontal: 40,
  },
  inputText: {
    color: "orange",
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,

    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "orange",
      },
      android: {
        backgroundColor: "orange",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    fontSize: 15,
    color: Platform.OS === "ios" ? "blue" : "black",
  },
  header: {
    alignItems: "center",
    marginBottom: 150,
  },
  headerTitle: {
    fontSize: 30,
    color: "orange",
  },
});
