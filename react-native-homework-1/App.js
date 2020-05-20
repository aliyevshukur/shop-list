import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";

import { RootNav } from "./navigation";
import store from "./store";
import { loadFonts } from "./styles/fonts";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />

      <RootNav />
    </Provider>
  );
}
