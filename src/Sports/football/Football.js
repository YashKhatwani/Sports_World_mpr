import React from "react";
import Product from "../../Product/Product";

function Football() {
  return (
    <div className="home ">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="12321341"
            title="Nike Mercurial Veloce III DF CR7 FG Football Shoes"
            price={10000}
            rating={3}
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
            id="23434132"
            title="FIFA Real Madrid CF Light Backpack"
            price={5000}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0470/1808/2472/products/YxODCIAg.jpg?v=1610987223"
          />
          <Product
            id="342323123"
            title="FIFA Manchester City F.C. Bungee Backpack"
            price={9000}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0470/1808/2472/products/60_67ca8b63-04c2-490a-8c73-f5eaec15ab21.jpg?v=1606845258"
          />
          <Product
            id="201290129"
            title="FIFA FC Barcelona Double Zipper Backpack"
            price={8000}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0470/1808/2472/products/25_c24358ef-c936-4b5c-a60f-c87a522f4c85.jpg?v=1606841710"
          />
        </div>
        <div className="home__row">
          <Product
            id="23434132"
            title="Maccabi Art FIFA FC Barcelona Barca Size 5 Soccer Ball"
            price={6000}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0470/1808/2472/products/8605FCBBall1.jpg?v=1606779775"
          />
          <Product
            id="12232312"
            title="
            Maccabi Art FIFA Juventus F.C. Size 5 Soccer Ball | Colorful Champions League Football Sports Equipment"
            price={4500}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0470/1808/2472/products/37_615e799c-ee7e-49dc-aeea-83c40ff89f2d.jpg?v=1606844882"
          />
          <Product
            id="23939293"
            title="Thermo Soccer Ball"
            price={2000}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/0470/1808/2472/products/ST350-5011_High_Large_2000x_eff595e9-bdc0-4e1e-8fd1-9b606121ccc3.png?v=1616652402"
          />
        </div>
      </div>
    </div>
  );
}

export default Football;
