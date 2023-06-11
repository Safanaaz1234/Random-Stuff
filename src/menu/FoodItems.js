import Sidebar from "./Sidebar";
import SubNavbar from "./SubNavbar";
import ItemsList from "./ItemsList";
function FoodItems() {
  return (
    <>
      <SubNavbar />
      <div className="flex">
        <Sidebar />
        <ItemsList />
      </div>
    </>
  );
}

export default FoodItems;
