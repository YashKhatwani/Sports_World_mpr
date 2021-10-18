import React from "react";
import Product from "../../Product/Product";

function Tennis() {
  return (
    <div className="home ">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="920923092"
            title="Head Speed Junior Racquets"
            price={3000}
            rating={4}
            image="https://www.gophersport.com/cmsstatic/g-52034-HeadSpeedJuniorRacquets-01.jpg"
          />
          <Product
            id="323802302"
            title="Wilson Practice Tennis Balls"
            price={1000}
            rating={5}
            image="https://www.gophersport.com/cmsstatic/img/118/G-51177-WilsonPractice-ce-1.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="8239283928"
            title="Gopher Rainbow Midsize Aluminum Tennis Racquets"
            price={5000}
            rating={3}
            image="https://www.gophersport.com/cmsstatic/img/515/G-52022-RainbowMidsizeAluminum-ce-1-clean.jpg"
          />

          <Product
            id="0239023902390"
            title="Gopher Rainbow Oversized Aluminum Tennis Racquets"
            price={8000}
            rating={5}
            image="https://www.gophersport.com/cmsstatic/img/605/G-527-RainbowOversizeAluminum-ce-1-clean.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="09230923231"
            title="QuickStart Tennis System"
            price={100000}
            rating={5}
            image="https://www.gophersport.com/cmsstatic/img/266/G-52345_TNquickStartTennis-Set-clean.jpg"
          />
          <Product
            id="93093409323"
            title="ClassPlus Racquet and Ball Packs"
            price={4500}
            rating={3}
            image="https://www.gophersport.com/cmsstatic/img/026/g-52017-classplus-racquet-and-ball-packs.jpg?medium"
          />
          <Product
            id="23939293"
            title="RacquetKing Tennis Cart"
            price={200000}
            rating={5}
            image="https://www.gophersport.com/cmsstatic/g-52306_TNracquetkingtennisAP.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Tennis;
