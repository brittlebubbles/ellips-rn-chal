import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { getHeight, getWidth } from "../utils";

import Apple from "../components/SocialButtons/Apple";
import { Button } from "react-native-elements";
import DummyLogo from "../svgs/DummyLogo";
import Facebook from "../components/SocialButtons/Facebook";
import Google from "../components/SocialButtons/Google";
import { colors } from "../styles/Colors";
import globalStyles from "../styles/globalStyles";

const Register = ({ navigation }: any) => {
  const globalstyles = globalStyles();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  const handlePrivacy = () => {
    Linking.openURL("https://ellipsis.com");
  };
  return (
    <View style={globalstyles.safeArea}>
      {/* <ScrollView style={globalstyles.scrollView}> */}
      <View style={globalstyles.container}>
        <View style={styles.topSection}>
          <DummyLogo />
          <Text style={styles.title}>Create an Account</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.formInputs}
            onChangeText={(name: any) => setName(name)}
            value={name}
            placeholder="Enter name"
            autoCapitalize="none"
            placeholderTextColor="#ABB3BF"
            keyboardType="default"
          />
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
        <View>
          <Text style={styles.termsText}>
            <Text style={{ color: "#888888" }}>
              By clicking this you hereby accept our {""}
            </Text>
            <Text onPress={handlePrivacy}>
              <Text style={{ fontWeight: "500" }}>Terms & Conditions</Text> of{" "}
              <Text style={{ fontWeight: "500" }}>the company</Text>
            </Text>
          </Text>
        </View>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Register"
            buttonStyle={{
              backgroundColor: colors.green,
              height: 55,
            }}
            containerStyle={{
              marginTop: 50,
              // width: "100%",
              width: getWidth(335),
            }}
            // disabled={!email || !password}
            onPress={() => console.log("Works")}
          />
          <View
            style={{
              paddingTop: getHeight(30),
              paddingBottom: getHeight(30),
            }}
          >
            <Text style={{ textAlign: "center" }}>Or Register with</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
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
          Already a member?{"  "}
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

export default Register;

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

  termsText: {
    fontSize: getWidth(13),
    fontWeight: "400",
  },
});
