import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../menu.css";
import { imagePath } from "./Components/Constants2";

async function getRestaurantMenu(setRestaurantMenu, restaurantId) {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantMenu(jsonData);
  } catch (exception) {
    console.log("Error is : " + exception);
  }
}
/**
 * /data/cards/groupedCard/cardGroupMap/REGULAR/cards/card/card/item-cards
 */

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  useEffect(() => {
    getRestaurantMenu(setRestaurantMenu);
  }, []);

  const [id] = useParams();
  const menuItems =
    restaurantMenu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
      .card.card.itemCards || [];

  return (
    <div className="menu-list">
      {menuItems.map((item) => {
        const menuObject = item.card?.info;

        return (
          <div key={menuObject?.id} className="menu-item">
            <div className="menu-item-img-container">
              <img
                className="menu-item-img"
                src={imagePath + menuObject?.imageId}
                alt={menuObject?.name}
              />
            </div>
            <div className="menu-item-content">
              <h3 className="menu-item-title">{menuObject?.name}</h3>
              <div className="menu-item-price-rating">
                <span className="menu-item-price">
                  ₹{menuObject?.price / 100 || menuObject?.defaultPrice / 100}
                </span>
                <span className="menu-item-rating">
                  <span className="star">★</span>{" "}
                  {menuObject?.ratings?.aggregatedRating?.rating}
                </span>
              </div>
              <p className="menu-item-description">{menuObject?.description}</p>
              <button className="add-to-cart">ADD</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
