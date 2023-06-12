import ResponsiveNavbar from "../main/ResponsiveNavbar";
import Footer from "../main/Footer";
import IndividualItemsMenu from "./IndividualItemsMenu";
import { useParams } from "react-router-dom";
function Product() {
  const { item } = useParams();
  const selected = IndividualItemsMenu.find((val) => {
    return val.category === item;
  });
  if (!selected) {
    return (
      <>
        <ResponsiveNavbar />
        <div>We could not find the item you are looking for</div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <ResponsiveNavbar />
      <div className="border mt-6 bg-brown p-10 text-white flex items-center justify-center flex-col lg:flex-row lg:justify-evenly  ">
        <div className="w-56 md:w-72 pl-5 lg:ml-20 lg:w-80">
          <img src={selected.image} alt={selected.alt} />
        </div>
        <br />
        <div
          className="text-3xl font-semibold lg:text-5xl lg:mr-20"
          style={{ fontFamily: "Dancing Script" }}
        >
          {selected.name}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
