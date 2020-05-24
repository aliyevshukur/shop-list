import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { AsyncStorage } from "react-native";

import { RootNav } from "./navigation";
import { loadFonts } from "./styles/fonts";
import { CustomText } from "./components/CustomText";
import { listReducer, MODULE_NAME as listsModuleName } from "./store/lists";
import { userReducer, MODULE_NAME as userModuleName } from "./store/user";

const rootReducer = combineReducers({
  [listsModuleName]: listReducer,
  [userModuleName]: userReducer,
});

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [currentStore, setCurrentStore] = useState(store);
  const [isStoreLoading, setIsStoreLoading] = useState(false);

  currentStore.subscribe(() => {
    saveState(currentStore.getState());
  });

  useEffect(() => {
    setIsStoreLoading(true);

    AsyncStorage.getItem("store")
      .then((value) => {
        if (value && value.length) {
          let initialStore = JSON.parse(value);

          setCurrentStore(
            createStore(
              rootReducer,
              initialStore,
              window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
            )
          );
        } else {
          setCurrentStore(store);
        }
        setIsStoreLoading(false);
      })
      .catch((e) => {
        console.log("Error", e);
        setCurrentStore(store);
        setIsStoreLoading(false);
      });
  }, []);

  // Store users settings on AsyncStore
  const saveState = async (data) => {
    try {
      await AsyncStorage.setItem("store", JSON.stringify(data));
    } catch (e) {
      console.log("Error", e);
    }
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  if (isStoreLoading) {
    return <CustomText>Store Is Loading</CustomText>;
  }

  return (
    <Provider store={currentStore}>
      <StatusBar hidden={true} />

      <RootNav />
    </Provider>
  );
}
