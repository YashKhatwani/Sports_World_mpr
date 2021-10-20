import React from "react";
import Product from "../Product/Product";
import "./Cricket.css";
import bat1 from "../Images/bat1.jpg";
import bat2 from "../Images/bat2.jpg";
import bat3 from "../Images/bat3.jpg";

function Cricket() {
  return (
    <div className="home ">
      {/* <h1>I am the home Compo</h1> */}
      <div className="home__container">
        <div className="home__row">
          <Product
            id="12321341"
            title="Duke red leather ball"
            price={10000}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0066/6563/3903/products/pic_4bdabee0-4043-4308-8f31-2bc7a2ae57ef_960x.progressive.jpg?v=1575349436"
          />
          <Product
            id="49538094"
            title="Nike Strike Gloves (White/Blue)"
            price={300}
            rating={4}
            image="https://i.ebayimg.com/images/g/rp8AAOSwca1gaoIO/s-l400.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SS glory LED criket stumps"
            price={2000}
            rating={3}
            image="https://www.sportsuncle.com/image/cache/catalog/images/ss/led-stumps-1200x1200.webp"
          />
          <Product
            id="23445930"
            title="Nike Zoom Devosion Cricket Shoes (Black/Silver/Volt)"
            price={6000}
            rating={5}
            image="https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK844592-002.jpg"
          />
          <Product
            id="3254354345"
            title="GM complete Cricket Kit"
            price={4000}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQGQW92p6sDiNScGJOX8ypL7Gt-PMIlHyNg&usqp=CAU"
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

export default Cricket;
