import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

 
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  const routing = useRoute(false);
  return <Provider store={store}>
    <NavigationContainer>{routing}</NavigationContainer>
  </Provider>;
}
