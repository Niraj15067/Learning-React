import { useState } from "react";
import { Link } from "react-router-dom";

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
function authenticateUser(isLoggedIn, setIsLoggedIn) {
  isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
}
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li key="home">
            <Link to="/home">Home</Link>
          </li>
          <li key="about">
            <Link to="/about">About</Link>
          </li>
          <li key="contact">
            <Link to="/contact">Contact</Link>
          </li>
          <li key="cart">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button
            className="button button-logout"
            onClick={() => authenticateUser(isLoggedIn, setIsLoggedIn)}
          >
            Logout
          </button>
        ) : (
          <button
            className="button button-login"
            onClick={() => authenticateUser(isLoggedIn, setIsLoggedIn)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default HeaderComponent;
