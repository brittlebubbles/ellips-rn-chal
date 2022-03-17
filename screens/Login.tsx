import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";
import { getHeight, getWidth } from "../utils";

import Apple from "../components/SocialButtons/Apple";
import AppleIcon from "../svgs/Socials/AppleIcon";
import { Button } from "react-native-elements";
import DummyLogo from "../svgs/DummyLogo";
import Facebook from "../components/SocialButtons/Facebook";
import FacebookIcon from "../svgs/Socials/FacebookIcon";
import Google from "../components/SocialButtons/Google";
import GoogleIcon from "../svgs/Socials/GoogleIcon";
import Input from "../components/Input";
import { RootStackParamList } from "../types";
import { colors } from "../styles/Colors";
import globalStyles from "../styles/globalStyles";

const Login = ({ navigation }: any) => {
  const globalstyles = globalStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  return (
    <View style={globalstyles.safeArea}>
      {/* <ScrollView style={globalstyles.scrollView}> */}
      <View style={globalstyles.container}>
        <View style={styles.topSection}>
          <DummyLogo />
          <Text style={styles.title}>Hey, Welcome Back!</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.formInputs}
            onChangeText={(email: any) => setEmail(email)}
            value={email}
            placeholder="Enter email address"
            autoCapitalize="none"
            placeholderTextColor="#ABB3BF"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.formInputs}
            onChangeText={(password: any) => setPassword(password)}
            value={password}
            placeholder="Enter Password"
            autoCapitalize="none"
            placeholderTextColor="#ABB3BF"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Continue"
            buttonStyle={{
              backgroundColor: colors.green,
              height: 55,
            }}
            containerStyle={{
              marginTop: 70,
              // width: "100%",
              width: getWidth(335),
            }}
            // disabled={!email || !password}
            onPress={() => navigation.navigate("Home")}
          />
          <View
            style={{
              paddingTop: getHeight(30),
              paddingBottom: getHeight(30),
            }}
          >
            <Text style={{ textAlign: "center" }}>Or Login with</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          // alignContent: "space-between",
          justifyContent: "space-evenly",

          // backgroundColor: "#323",
          paddingHorizontal: getWidth(14),
        }}
      >
        <Google />
        <Facebook />
        <Apple />
      </View>
      <View
        style={{
          paddingHorizontal: getWidth(25),
          bottom: getHeight(40),
          alignItems: "center",
        }}
      >
        <Text>
          New to Ellipsis(adom)?{"  "}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Register")}
          >
            <Text>Register Now</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  topSection: {
    paddingTop: getHeight(25),
  },
  title: {
    fontWeight: "700",
    fontSize: getWidth(28),
    lineHeight: getHeight(33),
    color: colors.black,
    fontStyle: "normal",
    paddingTop: getHeight(20),
    paddingBottom: getHeight(5),
  },
  formsContainer: {
    paddingTop: getHeight(30),
    alignSelf: "center",
  },
  form: {
    // width: getWidth(342),
    // height: getHeight(54),
    // borderRadius: getHeight(10),
    // borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getHeight(45),
  },
  formInputs: {
    height: getHeight(50),
    width: getWidth(335),
    borderColor: colors.border,
    borderRadius: getWidth(3),
    borderWidth: getWidth(1),

    alignContent: "center",
    alignItems: "center",
    padding: getHeight(15),
    marginBottom: getHeight(20),
    fontSize: getHeight(14),
    // backgroundColor: "#FAFBFC",
    backgroundColor: "#E8E8E8",
  },
  forgetText: {
    color: "rgba(60, 60, 67, 0.6)",
    fontSize: getWidth(13),
    lineHeight: getHeight(16),
    fontWeight: "500",
  },
  forgotPassword: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
