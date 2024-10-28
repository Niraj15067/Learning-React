import React from "react";
import ReactDOM from "react-dom/client";
import * as XYZ from "./Components/Header";
// import Body1 from "./Components/Body1";
import Footer from "./Components/Footer";

import HeaderComponent, { Title } from "./Components/Header"; //importing named and default export on the same line.
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hi Niraj!!"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "What's up!!"
);
const heading3 = React.createElement(
  "h3",
  {
    id: "title",
    key: "h3",
  },
  "Have you fucked hitomi already?"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
  heading3,
]);

const Component = () => {
  return (
    <div>
      {heading1}
      <h1>How are you?</h1>
      {heading3}
    </div>
  );
};

// <div>
// <h1>HI Niraj</h1>
// <ul>
//     <li>Home</li>
//     <li>About Us</li>
//     <li>Contact Us</li>
// </ul>
// </div>

//converting the html to react code like this is going to be a huge pain and boilerplate so to avoid this we have JSX
//Which will make this code shorter as well as better.
//JSX is a HTML like syntax but it's not HTML inside java script.
/*const header = React.createElement(
  "div",
  {
    id: "header",
  },
  [
    React.createElement("h1", {}, "Hi Niraj"),
    React.createElement("ul", {}, [
      React.createElement("li", {}, "Home"),
      React.createElement("li", {}, "About Us"),
      React.createElement("li", {}, "Contact Us"),
    ]),
  ]
);*/
//to solve the above problem make the code more readable , manageable, maintainable and much more we use JSX.
//any js code can be written inside this {}.

const CssComponent = () => {
  return (
    <div class="container">
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </div>
  );
};

// const Header1 = () => {
//   return (
//     <div>
//       {heading1}
//       {3 + 1}
//       <ul>
//         <li key="home">Home</li>
//         <li key="about us">About Us</li>
//         <li key="contact us">Contact Us</li>
//       </ul>
//       <CssComponent />
//     </div>
//   );
// };

//to pass multiple props just pass another below no need of , or anything just a space.
//passing each and every field of restaurant list particular object as separate prop by spreading it using ...
const Body = () => {
  return (
    <div className="body">
      <RestaurantCard {...restaurantList[0]} />
      <RestaurantCard {...restaurantList[1]} />
      <RestaurantCard {...restaurantList[2]} />
      <RestaurantCard {...restaurantList[3]} />
      <RestaurantCard {...restaurantList[4]} />
      <RestaurantCard {...restaurantList[5]} />
    </div>
  );
};
//instead of what we did above we can just run a loop instead of hardcoding it like that.

const burgerKing = {
  name: "Burger King",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
  cuisine: ["Burger", "American", "Indian"],
  rating: 4.5,
};

//using props directy or we can do object destructuring like :

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <img
//         className="card-img"
//         src={props?.restaurant?.imageUrl}
//         alt="Burger King"
//       />
//       <div className="card-content">
//         <h2 className="card-title">{props?.restaurant?.name}</h2>
//         <p className="card-category">{props?.restaurant?.cuisine}</p>
//         <p className="card-rating">{props?.restaurant?.rating}</p>
//       </div>
//     </div>
//   );
// };

//destructuring is being used here
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
const restaurantList = [
  {
    id: 1,
    name: "Burger King",
    cuisine: "American, Fast Food",
    rating: 4.2,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
  },
  {
    id: 2,
    name: "Pizza Hut",
    cuisine: "Pizza, Italian",
    rating: 4.1,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg",
  },
  {
    id: 3,
    name: "Starbucks",
    cuisine: "Cafe, Beverages",
    rating: 4.5,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/097bc34fa9627e3bc442c9a254887970",
  },
  {
    id: 4,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.3,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/2d369c2d-429a-4ab1-a853-b6e07a08e59f_745868.jpg",
  },
  {
    id: 5,
    name: "Subway",
    cuisine: "Healthy, Sandwiches",
    rating: 4.0,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/5fd4d719-cc0a-4af8-a0a0-4af11898f0df_36014.jpg",
  },
  {
    id: 6,
    name: "McDonald's",
    cuisine: "Fast Food, Burgers",
    rating: 4.4,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e585619e8994c449cb84884a2b998f98",
  },
];
const Body1 = () => {
  return (
    <div className="body1">
      {restaurantList.map((restaurant, index) => (
        <RestaurantCard key={index} {...restaurant} />
      ))}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body1 />
      <Footer />
    </>
  );
};

const d2 = document.getElementById("d2");
const root = ReactDOM.createRoot(d2);
root.render(<AppLayout />);
