import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
const Body1 = () => {
  return (
    <div className="body1">
      {restaurantList.map((restaurant, index) => (
        <RestaurantCard />
      ))}
    </div>
  );
};
export default Body1;
