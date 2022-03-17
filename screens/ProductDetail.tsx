import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-elements";
import React from "react";
import { addToCart } from "../helpers/cart";
import { colors } from "../styles/Colors";
import { getWidth } from "../utils";
import globalStyles from "../styles/globalStyles";

const ProductDetail = ({ navigation, route }: any) => {
  const globalstyles = globalStyles();

  const product = route.params;

  const { name, detail, image, price } = product;

  const addToCart = async (id: number) => {
    let itemArray: any = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );

        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <View style={globalstyles.safeArea}>
      {/* <View style={globalstyles.container}> */}
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="md-arrow-back-circle-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: "50%",
          //   backgroundColor: "lightgreen",
        }}
      >
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.content}>
        <View style={styles.wrapperTopContent}>
          <View style={styles.rowTopContent}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <Text style={styles.price}>{price} </Text>
        </View>
        <Text style={styles.desc}>{detail}</Text>

        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Add to cart"
            buttonStyle={{
              backgroundColor: colors.green,
              height: 55,
            }}
            containerStyle={{
              marginTop: 70,
              width: getWidth(335),
              alignContent: "center",
              justifyContent: "center",
              paddingHorizontal: getWidth(10),
            }}
            onPress={() => addToCart(product.id)}
          />
        </View>
      </View>
    </View>

    // </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    alignItems: "center",
    // backgroundColor: colors.blue,
  },
  backIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 16,
    // marginHorizontal: 16,
    alignSelf: "flex-start",
  },
  //   wrapperImg: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  rowTopContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
  },
  price: {
    fontSize: 14,
    color: colors.black,
  },
  desc: {
    paddingHorizontal: 20,
  },
  wrapperRelatedItems: {
    marginTop: 25,
  },
  titleRelatedItems: {
    fontSize: 14,
    color: colors.black,
    paddingHorizontal: 20,
  },
  wrapperBoxRelatedItems: {
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 20,
  },
});
