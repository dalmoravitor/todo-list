import { Home } from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Home />
    </Fragment>
    
  )
}

