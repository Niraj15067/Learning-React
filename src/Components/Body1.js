import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterRestaurants(searchText, restaurants) {
  const result = restaurants.filter((rest) =>
    rest.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
}

const Body1 = () => {
  const [searchText, setSearchText] = useState("KFC");
  const [restaurants, setRestaurants] = useState(restaurantList);
  function handleClick(e) {
    setSearchText(e.target.value);
  }
  return (
    <div className="body1">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          onChange={handleClick}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterRestaurants(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="search-btn"
          onClick={() => {
            setRestaurants(restaurantList);
          }}
        >
          Reset
        </button>
      </div>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard {...restaurant} />
      ))}
    </div>
  );
};
export default Body1;
