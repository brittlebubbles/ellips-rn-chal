import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { getHeight, getWidth } from "../utils";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { colors } from "../styles/Colors";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}: any) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.darkBlue
              : colors.light,
            alignItems: "center",
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ color: colors.darkBlue, fontSize: 22, marginRight: 10 }}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: colors.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: colors.darkBlue, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: colors.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: getWidth(14),
    color: colors.grey,
  },
  inputContainer: {
    height: getHeight(55),
    backgroundColor: colors.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: getWidth(0.5),
  },
});

export default Input;
