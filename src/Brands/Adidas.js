import React from "react";
import Product from "../Product/Product";

function Adidas() {
  return (
    <div className="home ">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="12321341"
            title="Adidas "
            price={10000}
            rating={3}
            image="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cce06c56d44f4983b362ac6a00f67377_9366/Face_Covers_3-Pack_XS-S_Multicolor_HB7857_01_laydown.jpg"
          />
          <Product
            id="49538094"
            title="Adidas"
            price={300}
            rating={4}
            image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d3fbe4122134471d836fab9f00a69944_9366/predator-20-training-gloves.jpg"
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

export default Adidas;
