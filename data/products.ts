export const products = [
  {
    id: 1,
    name: "hero Product",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    hero: "OMG This just came out today!",
    image: require("../assets/lap1.jpg"),
  },
  {
    id: 2,
    name: "Product 1",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    info: "This is the latest and greatest product from Derp corp.",
    image: require("../assets/lap2.jpeg"),
  },
  {
    id: 3,

    name: "Product 2",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    offer: "BOGOF",
    image: require("../assets/lap3.jpg"),
  },
  {
    id: 4,

    name: "Product 3",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: require("../assets/lap4.jpg"),
  },
  {
    id: 5,

    name: "Product 4",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    offer: "No srsly GTFO",
    image: require("../assets/lap5.jpg"),
  },
  {
    id: 6,

    name: "Product 5",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: require("../assets/lap6.jpg"),
  },
  {
    id: 7,
    name: "Product 6",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    info: "This is the latest and greatest product from Derp corp.",
    offer: "info with offer",
    image: require("../assets/lap7.jpg"),
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id: any) {
  return products.find((product) => product.id == id);
}

// export function getProduct(id) {
//   return products.find((product) => (product.id == id));
// }
