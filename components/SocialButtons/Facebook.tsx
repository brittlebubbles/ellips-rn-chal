import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getHeight, getWidth } from "../../utils";

import FacebookIcon from "../../svgs/Socials/FacebookIcon";
import GoogleIcon from "../../svgs/Socials/GoogleIcon";
import React from "react";
import { colors } from "../../styles/Colors";

const Facebook = () => {
  return (
    <View
      style={{
        height: getHeight(64),
        width: getWidth(64),
        borderRadius: getWidth(50),
        borderColor: "rgba(32, 10, 77, 0.2)",
        borderWidth: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        // padding: 20,
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Facebook;
