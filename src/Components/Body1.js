import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restaurantList2 } from "./Constants2";
import Shimmer from "./Shimmer";
import NoResult from "./NoResult";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";
import offline from "../../assets/offline.jpg";

const Body1 = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList2);
  const [isLoading, setIsLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);
  const status = useOnline();

  if (!status) {
    return (
      <div>
        <img src={offline}></img>
        <p>You are currently offline. Please check your connection.</p>
      </div>
    );
  }

  // function handleClick(value) {
  //   setSearchText(value);
  //   // restaurantList = restaurantList.filter((x) =>
  //   //   x.info.name.toLowerCase().includes(value)
  //   // );
  // }

  // useEffect(() => {
  //   console.log("restaurant has been changed. Inisde useffect()");
  //   setRestaurants(restaurantList);
  //   return () => {
  //     console.log("clean up task");
  //   };
  // }, [restaurants]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body1">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterRestaurants(
              searchText,
              restaurantList2,
              setNoResult,
            );
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="search-btn"
          onClick={() => {
            setSearchText("");
            setRestaurants(restaurantList2);
            setNoResult(false);
          }}
        >
          Reset
        </button>
      </div>
      {noResult ? (
        <NoResult />
      ) : (
        restaurants
          .filter((x) => x.info.name.toLowerCase().includes(searchText))
          .map((restaurant, index) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              style={{ textDecoration: "none" }}
            >
              <RestaurantCard info={restaurant.info} key={restaurant.info.id} />
            </Link>
          ))
      )}
    </div>
  );
};
export default Body1;
