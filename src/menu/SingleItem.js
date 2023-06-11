import { Link } from "react-router-dom";
function SingleItem(props) {
  return (
    <div className="flex items-center mt-4 lg:mt-6 md:w-1/2 pr-2">
      <Link to={`/menu/${props.altVal}`}>
        <img
          src={props.imgSrc}
          alt={props.altVal}
          className=" bg-mustard w-20 md:w-24 lg:w-32 rounded-full  md:cursor-pointer"
        />
      </Link>
      <h3 className="ml-4  md:text-lg">{props.title}</h3>
    </div>
  );
}

export default SingleItem;
