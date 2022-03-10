import axios from "axios";
import { useEffect, useState } from "react";
import "./api.css";
import Profile from "./profile";
import Login from "./login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./main";
import Mostrecent from "./mostrecent";
import Products from "./products";
import Featuredproducts from "./featured";
import Latest from "./latest";
import Offer from "./offer";
import Footer from "./footer";
import Card from "./card";
import Buynow from "./buynow";

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
    })
  }, [])
  return (
    <>
      <div className="head">
        <div className="header">
          <h1>TRENDING FASHIONS</h1>
          <div className="navbar">
            <a id="home" href="/home">HOME</a>
            <a id="profilee" href="/profile">PROFILE</a>
            <a id="login" href="/login">LOGIN</a>
          </div>
        </div>
      </div>
      {
        product.map((e) => (
          <div className="container">
            <div className="cocontainer">
              <img id="image" src={e.image} alt="" srcset="" />
              <h2>{e.title}</h2>
            </div>

          </div>

        ))
      }
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <>
              <Main />
              <Mostrecent />
              <br />
              <Products />
              <Featuredproducts />
              <Latest />
              <Offer />
              <Footer />
            </>

          </Route>
          <Route exact path="/card">
            <Card />
          </Route>
          <Route exact path="/buynow">
            <Buynow />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;