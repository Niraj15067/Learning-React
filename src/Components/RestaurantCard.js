const RestaurantCard = ({ name, imageUrl, cuisine, rating }) => {
  // const { name, cuisine, rating, imageUrl } = restaurant; //instead of doing this we can also use restaurant. any property as well.
  return (
    <div className="card">
      <img className="card-img" src={imageUrl} alt="Burger King" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-category">{cuisine}</p>
        <p className="card-rating">{rating}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
