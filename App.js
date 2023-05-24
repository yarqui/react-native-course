import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { store } from "./src/redux/store";
import fonts from "./src/utils/fonts";
import { Main } from "./src/components/Main/Main";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          [fonts.robotoRegular]: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
          [fonts.robotoMedium]: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
          [fonts.robotoBold]: require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
