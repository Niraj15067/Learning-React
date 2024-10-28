const Title = () => {
  return (
    <a href="/">
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
        className="logo"
        key="logo"
      ></img>
    </a>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li key="home">Home</li>
          <li key="about">About</li>
          <li key="contact">Contact</li>
          <li key="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
