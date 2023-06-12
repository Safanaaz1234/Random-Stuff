import ResponsiveNavbar from "../main/ResponsiveNavbar";
import Footer from "../main/Footer";
import SubNavbar from "./SubNavbar";
import Sidebar from "./Sidebar";
import SingleItem from "./SingleItem";
import FoodMenu from "./FoodMenu";
import { useParams } from "react-router-dom";

function SubItemsList() {
  const { category } = useParams();
  let foodItem = "";
  const capitalize = (words) => {
    const word = words.split("-");
    const capital = word.map((val) => {
      return val.charAt(0).toUpperCase() + val.slice(1);
    });
    foodItem = capital.join(" ");
  };
  capitalize(category);
  const selected = FoodMenu.find((item) => {
    return item.category === category;
  });
  if (!selected) {
    return (
      <>
        <ResponsiveNavbar />
        <SubNavbar />
        <div className="flex">
          <Sidebar />
          <div className="mt-12 mx-6 w-full md:ml-36 md:mr-10 lg:mx-8 lg:w-3/4">
            <h1 className="text-2xl md:text-3xl font-semibold">Menu</h1>
            <h2 className="mt-6 text-base md:text-lg">
              We could not find this category
            </h2>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <ResponsiveNavbar />
        <SubNavbar />
        <div className="flex">
          <Sidebar />
          <div className="mt-12 mx-6 w-full md:ml-36 md:mr-10 lg:mx-8 lg:w-3/4">
            <h1 className="text-sm md:text-base text-slate-500">
              Menu / {foodItem}
            </h1>
            <div>
              <h2 className="mt-2 font-semibold text-lg md:text-xl lg:text-2xl">
                {foodItem}
              </h2>
              <div className="w-full lg:w-5/6 border-b-2 mt-3 mr-6"></div>
              <div className="w-full lg:w-5/6 mr-6 py-3 mt-2 md:flex md:flex-wrap">
                {selected.items.map((item) => {
                  return (
                    <SingleItem
                      key={item.alt}
                      imgSrc={item.image}
                      altVal={`product/${item.alt}`}
                      title={item.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SubItemsList;
