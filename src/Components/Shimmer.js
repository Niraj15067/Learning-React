export default Shimmer = () => (
  <div className="shimmer-container">
    {/* Render empty cards for shimmer effect */}
    {Array(9)
      .fill()
      .map((_, index) => (
        <div className="card shimmer" key={index}>
          <div className="card-img"></div>
          <div className="card-content">
            <div className="card-title shimmer-line"></div>
            <div className="card-category shimmer-line"></div>
            <div className="card-rating shimmer-line"></div>
          </div>
        </div>
      ))}
  </div>
);
