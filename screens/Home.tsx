import { AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { getHeight, getWidth } from "../utils";

import { colors } from "../styles/Colors";
import globalStyles from "../styles/globalStyles";
import { products } from "../data/products";

const { width } = Dimensions.get("screen");

const mockData = [
  { id: "1", text: "Expo 💙" },
  { id: "2", text: "is" },
  { id: "3", text: "Awesome!" },
];

// type ProductType as Product = {
//   name: string
//   price: string
//   image: string
//   info: string
//   detail: string
//   hero: string
// }

const Home = ({ navigation }: any) => {
  const globalstyles = globalStyles();
  const [isNew, setIsnew] = useState(false);

  const ProductCard = ({ product }: any) => {
    const { image, name, price, detail, hero, offer } = product;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("ProductDetail", product)}
      >
        <View
          style={{
            // height: 190,
            // backgroundColor: colors.white,
            // elevation: 10,
            // width: width / 2.5,
            // marginRight: 20,
            // padding: 10,
            // marginVertical: 20,
            height: 225,
            backgroundColor: colors.light,
            width: width / 2.5,
            marginHorizontal: 2,
            borderRadius: 10,
            marginBottom: 20,
            padding: 15,
          }}
        >
          {hero ? (
            <View style={{ alignItems: "flex-end" }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.green,
                }}
              >
                <Text style={{ color: colors.white }}>New</Text>
              </View>
            </View>
          ) : (
            <Text> </Text>
          )}

          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                // backgroundColor: colors.black,
              }}
            >
              <Image
                // style={{ flex: 1, resizeMode: "contain" }}
                style={{
                  width: 100,
                  height: 100,

                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",

                  flex: 1,
                  resizeMode: "cover",
                }}
                // source={require("../assets/lap1.jpg")}
                // source={{
                //   uri: "https://source.unsplash.com/user/c_v_r/100x100",
                // }}
                // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                // source={{
                //   uri: "https://source.unsplash.com/user/c_v_r/100x100",
                // }}
                source={image}

                // source={require("https://reactnative.dev/img/tiny_logo.png")}
              />
            </View>
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>{price}</Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: colors.green,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: colors.white,
                  fontWeight: "bold",
                }}
              >
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalstyles.safeArea}>
      <View style={globalstyles.smallContainer}>
        <View style={styles.header}>
          <Text>Hello Ellipsis!</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.searchInputContainer}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput placeholder="Search" />
          </View>
        </View>
        <Text style={styles.title}>Top Products</Text>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          keyExtractor={(item, index) => item.name}
          data={products}
          renderItem={({ item }) => {
            return <ProductCard product={item} key={item.name} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: colors.blue,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // logo: {
  //   width: 66,
  //   height: 58,
  // },
});
