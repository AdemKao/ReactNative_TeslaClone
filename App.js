import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarItem from "./components/CarItem";
import CarsList from "./components/CarList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem name={"Model 3"} tagLine={"Order Online for"} tagLineCTA={"Touchless Delivery"} image={require("./assets/images/Model3.jpeg")} /> */}
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
