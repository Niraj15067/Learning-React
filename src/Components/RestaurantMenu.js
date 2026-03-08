import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../menu.css";
import { imagePath } from "./Constants2";
import { restaurantList2 } from "./Constants2";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

/**
 * /data/cards/groupedCard/cardGroupMap/REGULAR/cards/card/card/item-cards
 */

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantMenu = useRestaurant(id);

  // const menuItems =
  //   restaurantMenu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
  //     .card.card.itemCards || [];
  if (!restaurantMenu) {
    return <Shimmer />;
  }
  const menuItems =
    restaurantMenu?.data?.cards
      ?.find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (x) => x.card?.card?.itemCards,
      )?.card?.card?.itemCards || [];

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
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
