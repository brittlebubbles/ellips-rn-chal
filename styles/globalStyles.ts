import { Platform, StyleSheet } from "react-native";
import { getHeight, getWidth } from "../utils/index";

const styles = () => {
  return StyleSheet.create({
    safeArea: {
      height: "100%",
      backgroundColor: "#fff",
      paddingTop: "10%",
      flex: 1,
    },
    scrollView: {
      height: "100%",
      backgroundColor: "#424",
    },
    container: {
      paddingHorizontal: getWidth(25),
    },
    smallContainer: {
      paddingHorizontal: getWidth(20),
    },
  });
};

export default styles;
