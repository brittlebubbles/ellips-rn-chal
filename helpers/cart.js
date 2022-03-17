export const addToCart = async (id) => {
  let itemArray = await AsyncStorage.getItem("cartItems");
  itemArray = JSON.parse(itemArray);
  if (itemArray) {
    let array = itemArray;
    array.push(id);

    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(array));
      ToastAndroid.show("Item Added Successfully to cart", ToastAndroid.SHORT);

      navigation.navigate("Home");
    } catch (error) {
      return error;
    }
  } else {
    let array = [];
    array.push(id);
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(array));
      ToastAndroid.show("Item Added Successfully to cart", ToastAndroid.SHORT);
      navigation.navigate("Home");
    } catch (error) {
      return error;
    }
  }
};
