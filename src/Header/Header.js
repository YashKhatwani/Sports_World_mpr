import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
// import logo from "../Images/Logo.jpeg";
import logo from "../Images/Logo1.jpeg";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleChnage = () => {};

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon Logo" />
      </Link>

      <div className="header__category">
        <Link to="/category" style={{color:"white",textDecoration:"none"}} >
          <h3 >Category</h3>
        </Link>
      </div>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          onChange={handleChnage}
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="login__redirect">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user ? user?.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
      </div>
      <div className="header_optionBasket">
        <Link to="/checkout" className="shoppingcart__link">
          <ShoppingCartIcon />
        </Link>
        <span className="header__optionLine header__optionBasketCount">
          {basket?.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
