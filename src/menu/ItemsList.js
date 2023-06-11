import SingleItem from "./SingleItem";
import tea from "../assets/tea.png";
import coffee from "../assets/coffee.png";
import coldCoffee from "../assets/coldCoffee.png";
import milkshake from "../assets/milkshake.png";
import coldDrink from "../assets/coldDrink.png";
import pastry from "../assets/pastry.png";
import sandwich from "../assets/sandwich.png";
import pasta from "../assets/pasta.png";

function ItemsList() {
  return (
    <>
      <div className="mt-12 mx-6 w-full md:ml-36 md:mr-10 lg:mx-8 lg:w-3/4">
        <h1 className="text-2xl md:text-3xl font-semibold">Menu</h1>
        <div>
          <h2 className="mt-4 md:mt-7 lg:mt-10 font-semibold text-lg md:text-2xl">
            Drinks
          </h2>
          <div className="w-full lg:w-5/6 border-b-2 mt-3 mr-6"></div>
          <div className="w-full lg:w-5/6 mr-6 py-3 mt-2 md:flex md:flex-wrap">
            <SingleItem imgSrc={tea} altVal="hot-teas" title="Hot Teas" />
            <SingleItem
              imgSrc={coffee}
              altVal="hot-coffees"
              title="Hot Coffees"
            />
            <SingleItem
              imgSrc={coldCoffee}
              altVal="cold-coffees"
              title="Cold Coffees"
            />
            <SingleItem
              imgSrc={milkshake}
              altVal="milkshakes"
              title="Milkshakes"
            />
            <SingleItem
              imgSrc={coldDrink}
              altVal="cold-drinks"
              title="Cold Drinks"
            />
          </div>
        </div>
        <div>
          <h2 className="mt-4 md:mt-7 lg:mt-10 font-semibold text-lg md:text-2xl">
            Food
          </h2>
          <div className="w-full lg:w-5/6 border-b-2 mt-3 mr-6"></div>
          <div className="w-full lg:w-5/6 mr-6 py-3 mt-2 md:flex md:flex-wrap">
            <SingleItem imgSrc={pastry} altVal="bakery" title="Bakery" />
            <SingleItem
              imgSrc={sandwich}
              altVal="hot-breakfast"
              title="Hot Breakfast"
            />
            <SingleItem imgSrc={pasta} altVal="lunch" title="Lunch" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsList;
