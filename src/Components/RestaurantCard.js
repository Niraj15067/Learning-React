import { imagePath } from "./Constants2";

const RestaurantCard = ({ info }) => {
  // const { name, cuisine, rating, imageUrl } = restaurant; //instead of doing this we can also use restaurant. any property as well.
  return (
    <div className="card">
      <img
        className="card-img"
        src={imagePath + info.cloudinaryImageId}
        alt="Burger King"
      />
      <div className="card-content">
        <h2 className="card-title">{info.name}</h2>
        <p className="card-category">{info.cuisines}</p>
        <p className="card-rating">{info.avgRatingString}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
