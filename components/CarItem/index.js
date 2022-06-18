import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyleButton from "../StyleButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagLine, tagLineCTA, image } = props;
  return (
    <View style={styles.carContainer}>
      {/* <ImageBackground source={require("../../assets/images/ModelS.jpeg")} style={styles.image} /> */}
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyleButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
