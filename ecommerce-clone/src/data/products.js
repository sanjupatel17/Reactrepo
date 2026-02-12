import iphone from "../images/iphone.jpg";
import samsung from "../images/samsung.jpg";
import watch from "../images/watch.jpg";
import headphones from "../images/headphones.jpg";
import laptop from "../images/laptop.jpg";
import speaker from "../images/speaker.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import ac from "../images/ac.jpg";

const products = [
  { id: 1, title: "iPhone 14", price: 79999, image: iphone },
  { id: 2, title: "Samsung Galaxy S23", price: 69999, image: samsung },
  { id: 3, title: "Noise Smart Watch", price: 2999, image: watch },
  { id: 4, title: "Boat Headphones", price: 4999, image: headphones },
  { id: 5, title: "HP Laptop", price: 55999, image: laptop },
  { id: 6, title: "Boat Speaker", price: 1999, image: speaker },

  // 🔥 New Products
  { id: 7, title: "LG Double Door Fridge", price: 35999, image: fridge },
  { id: 8, title: "Samsung 55 inch Smart TV", price: 54999, image: tv },
  { id: 9, title: "Voltas 1.5 Ton AC", price: 42999, image: ac },
];

export default products;
