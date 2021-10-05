import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import bat1 from "../Images/bat1.jpg";
import bat2 from "../Images/bat2.jpg";
import bat3 from "../Images/bat3.jpg";

function Home() {
  return (
    <div className="home ">
      {/* <h1>I am the home Compo</h1> */}
      <div className="home__container">
        <div className="home__row">
          <Product
            id="12321341"
            title="Nike Mercurial Veloce III DF CR7 FG Football Shoes"
            price={10000}
            rating={5}
            image="https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK852518-001.jpg"
          />
          <Product
            id="49538094"
            title="Nike Strike Football (White/Blue)"
            price={300}
            rating={4}
            image="https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NKSC2983-135.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Adidas All Court Basketball (Size 7)"
            price={2000}
            rating={3}
            image="https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/ADX35859L.jpg"
          />
          <Product
            id="23445930"
            title="Nike Zoom Devosion Basketball Shoes (Black/Silver/Volt)"
            price={6000}
            rating={5}
            image="https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK844592-002.jpg"
          />
          <Product
            id="3254354345"
            title="Stag Solid Steel Basketball Ring (20 mm)"
            price={4000}
            rating={4}
            image="https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/STABBRSS20.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1254354345"
            title="Sg bat is the a good begginer level bat provides great grip with a solid stroke"
            price={4000}
            rating={3}
            image={bat1}
          />
          <Product
            id="1254354348"
            title="Mrf bats are a mid level bat that provide an amature player all the tools to make the best play he can"
            price={8000}
            rating={3}
            image={bat2}
          />
          <Product
            id="1254354349"
            title="Adidas Bats are bats made for the professional player, many big names such as Rahul Dravid and Sachin Tendulkar endorse this bat "
            price={10000}
            rating={4}
            image={bat3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
