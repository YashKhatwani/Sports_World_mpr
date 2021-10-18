import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./SignUp/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from "./Subtotal/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";
import Slider from "./Slider";
import Category_Header from "./CategoryHeader/Category_Header";
import Cricket from "./Sports/Cricket";

const promise = loadStripe(
  "pk_test_51JTq1wSFXfBk6YJLMZtJcO1hHDLOqGIaOURCNFSV5EJVsHxhGBIO1GMwDpnvy3UhCUkdE7xqKXUedlTdIaOjY3ov00DzsOefNm"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      //User logs in ?
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User logs out ?
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  //when the array bracket is kept empty use effet will only run 1 time

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/Sports">
            <Header />
            <Category_Header />
            <Cricket />
          </Route>
          <Route path="/cricket">
            <Header />
            <Category_Header />
            <Cricket />
          </Route>
          <Route path="/Brands">
            <Header />
          </Route>
          <Route path="/Contacts">
            <Header />
          </Route>
          <Route path="/">
            <Header />
            <Slider />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
