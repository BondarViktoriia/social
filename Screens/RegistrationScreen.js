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
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
  }, []);

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
  const toggleShowPassword = () => {
    setIsSecurePassword(!isSecurePassword);
  };

  return (
    <TouchableWithoutFeedback onPress={closeKeyboardBackdrop}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/bgimage.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyBoard ? 80 : 73,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
              <View>
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

              <View style={styles.inputPassword}>
                <TextInput
                  style={{ flex: 1 }}
                  secureTextEntry={isSecurePassword}
                  placeholder="Пароль"
                  textAlign={"left"}
                  placeholderTextColor={"#BDBDBD"}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <TouchableOpacity
                  style={styles.buttonPassword}
                  onPress={toggleShowPassword}
                >
                  <Text style={styles.buttonText}>
                    {isSecurePassword ? "Показать" : "Скрыть"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={keyboardHide}
                activeOpacity={0.7}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textForm}>
                <Text>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    padding: 16,
    color: "#212121",
    borderRadius: 8,
    marginBottom: 16,
  },
  inputPassword: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    padding: 16,
    color: "#212121",
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  buttonPassword: {
    position: "absolute",
    right: 10,
    top: 12,
    zIndex: 1,
  },
  buttonText: {
    color: "#1B4371",
  },
  form: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    minWidth: 400,
  },

  button: {
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    borderRadius: 100,
    height: 51,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "black" : "#FFFFFF",
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
  },

  textForm: {
    color: "#1B4371",
    alignSelf: "center",
    marginBottom: 45,
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
  },
});

export default RegistrationScreen;
