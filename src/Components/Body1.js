import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restaurantList2 } from "./Constants2";
import Shimmer from "./Shimmer";
import NoResult from "./NoResult";

function filterRestaurants(searchText, restaurants, setNoResult) {
  const result = restaurants.filter((rest) =>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  if (result.length === 0) {
    setNoResult(true);
  }
  return result;
}

const Body1 = () => {
  const [searchText, setSearchText] = useState("KFC");
  const [restaurants, setRestaurants] = useState(restaurantList2);
  const [isLoading, setIsLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);
  function handleClick(e) {
    setSearchText(e.target.value);
  }

  // useEffect(() => {
  //   console.log("restaurant has been changed. Inisde useffect()");
  //   setRestaurants(restaurantList);
  //   return () => {
  //     console.log("clean up task");
  //   };
  // }, [restaurants]);

  console.log("render");
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <Shimmer />
  ) : (
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
            const data = filterRestaurants(
              searchText,
              restaurantList2,
              setNoResult
            );
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="search-btn"
          onClick={() => {
            setRestaurants(restaurantList2);
          }}
        >
          Reset
        </button>
      </div>
      {noResult ? (
        <NoResult />
      ) : (
        restaurants.map((restaurant, index) => (
          <RestaurantCard info={restaurant.info} key={restaurant.info.id} />
        ))
      )}
    </div>
  );
};
export default Body1;
