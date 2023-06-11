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
      },
      {
        name: "Tea Latte",
        image: teaLatte,
      },
    ],
  },
  {
    category: "cold-coffees",
    items: [
      {
        name: "Chilled Coffee",
        image: coldCoffee,
      },
    ],
  },
  {
    category: "hot-coffees",
    items: [
      {
        name: "Espresso",
        image: coffee,
      },
      {
        name: "Chocolate Espresso",
        image: chocoEspresso,
      },
      {
        name: "Capuccino",
        image: cappuccino,
      },
      {
        name: "Americano",
        image: americano,
      },
    ],
  },
  {
    category: "milkshakes",
    items: [
      {
        name: "Butterscotch Milkshake",
        image: milkshake,
      },
    ],
  },
  {
    category: "cold-drinks",
    items: [
      {
        name: "Blue Lagoon ",
        image: coldDrink,
      },
    ],
  },
  {
    category: "bakery",
    items: [
      {
        name: "Strawberry Delight",
        image: pastry,
      },
      {
        name: "Chocolate Pastry",
        image: chocoPastry,
      },
      {
        name: "Macaroons",
        image: macaroons,
      },
      {
        name: "Golden Honey Pancakes",
        image: pancake,
      },
      {
        name: "Chocochip Cookies",
        image: cookie,
      },
      {
        name: "Butter Bliss",
        image: croissant,
      },
      {
        name: "Chocolate Croissant",
        image: chocoCroissant,
      },
    ],
  },
  {
    category: "hot-breakfast",
    items: [
      {
        name: "Grilled Cheese Sandwich",
        image: sandwich,
      },
    ],
  },
  {
    category: "lunch",
    items: [
      {
        name: "Chinese Pasta",
        image: pasta,
      },
    ],
  },
];

export default FoodMenu;
