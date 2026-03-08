import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true",
  );
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("login") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const logOut = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    navigate("/login");
  };
  const goToLogin = () => {
    navigate("/login");
  };

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
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li key="cart">
            <Link to="/cart">Cart</Link>
          </li>
          <li key="demo">
            <Link to="/restaurant/demo">Demo</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button className="button button-logout" onClick={logOut}>
            Logout
          </button>
        ) : (
          <button className="button button-login" onClick={goToLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default HeaderComponent;
