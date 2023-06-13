import tea from "../assets/tea3.png";
import teaLatte from "../assets/teaLatte.png";
import coldCoffee from "../assets/coldCoffee.png";
import coffee from "../assets/coffee.png";
import cappuccino from "../assets/cappuccino.png";
import chocoEspresso from "../assets/chocoEspresso.png";
import americano from "../assets/americano.png";
import milkshake from "../assets/milkshake.png";
import coldDrink from "../assets/coldDrink.png";
import pastry from "../assets/pastry.png";
import chocoPastry from "../assets/chocoPastry.png";
import macaroons from "../assets/macaroons.png";
import pancake from "../assets/pancake.png";
import cookie from "../assets/cookie.png";
import croissant from "../assets/croissant.png";
import chocoCroissant from "../assets/chocoCroissant.png";
import sandwich from "../assets/sandwich.png";
import pasta from "../assets/pasta.png";
const FoodMenu = [
  {
    category: "hot-teas",
    items: [
      {
        name: "Tea",
        image: tea,
        alt: "tea",
      },
      {
        name: "Tea Latte",
        image: teaLatte,
        alt: "tea-latte",
      },
    ],
  },
  {
    category: "cold-coffees",
    items: [
      {
        name: "Chilled Coffee",
        image: coldCoffee,
        alt: "cold-coffee",
      },
    ],
  },
  {
    category: "hot-coffees",
    items: [
      {
        name: "Espresso",
        image: coffee,
        alt: "espresso",
      },
      {
        name: "Chocolate Espresso",
        image: chocoEspresso,
        alt: "chocolate-espresso",
      },
      {
        name: "Capuccino",
        image: cappuccino,
        alt: "cappuccino",
      },
      {
        name: "Americano",
        image: americano,
        alt: "americano",
      },
    ],
  },
  {
    category: "milkshakes",
    items: [
      {
        name: "Butterscotch Milkshake",
        image: milkshake,
        alt: "butterscotch-milkshake",
      },
    ],
  },
  {
    category: "cold-drinks",
    items: [
      {
        name: "Blue Lagoon ",
        image: coldDrink,
        alt: "blue-lagoon",
      },
    ],
  },
  {
    category: "bakery",
    items: [
      {
        name: "Strawberry Delight",
        image: pastry,
        alt: "strawberry-delight",
      },
      {
        name: "Chocolate Pastry",
        image: chocoPastry,
        alt: "chocolate-pastry",
      },
      {
        name: "Macaroons",
        image: macaroons,
        alt: "macaroons",
      },
      {
        name: "Golden Honey Pancakes",
        image: pancake,
        alt: "golden-honey-pancakes",
      },
      {
        name: "Chocochip Cookies",
        image: cookie,
        alt: "chocochip-cookies",
      },
      {
        name: "Butter Bliss",
        image: croissant,
        alt: "butter-bliss",
      },
      {
        name: "Chocolate Croissant",
        image: chocoCroissant,
        alt: "chocolate-croissant",
      },
    ],
  },
  {
    category: "hot-breakfast",
    items: [
      {
        name: "Grilled Cheese Sandwich",
        image: sandwich,
        alt: "grilled-cheese-sandwich",
      },
    ],
  },
  {
    category: "lunch",
    items: [
      {
        name: "Chinese Pasta",
        image: pasta,
        alt: "chinese-pasta",
      },
    ],
  },
];

export default FoodMenu;
