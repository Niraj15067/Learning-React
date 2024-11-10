import sadImage from "../../assets/noData.png"; // Import the image

const NoResultsFound = () => {
  return (
    <div className="no-results">
      <img src={sadImage} alt="No results found" className="sad-image" />
      <h2>Sorry, no results found!</h2>
      <p>Try a different search term or browse our categories.</p>
    </div>
  );
};

export default NoResultsFound;
