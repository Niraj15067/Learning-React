import { useEffect, useState } from "react";
import menuData from "../utils/mockMenu.json";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // getRestaurantMenu();
    // simulate API delay (optional)
    setTimeout(() => {
      setRestaurant(menuData);
    }, 500);
  }, [resId]); // Run effect whenever resId changes

  async function getRestaurantMenu() {
    try {
      console.log("Tring to fetch from API", resId);
      // const data = await fetch(
      //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
      // );

      console.log(data);
      const jsonData = await data.json();
      console.log(jsonData);
      setRestaurant(jsonData); // Use setRestaurant instead of setRestaurantMenu
    } catch (exception) {
      console.log("Error is : " + exception);
    }
  }

  return restaurant; // Return restaurant data
};

export default useRestaurant;
