import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "./card";
import Footer from "./footer";
import Prodetails from "./prodetails";
import Head from "./head";
import Login from "./login";
import Main from "./main";
import Mostrecent from "./mostrecent";
import Profile from "./profile";
import "./style.css";
import Featuredproducts from "./featured";
import Latest from "./latestproducts";
import Offer from "./offer";
import Products from "./products";
import Buynow from "./buynow";



function App() {
  return (
    <>
      <Head />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
           <>
              <Main/>
              <br />
              <Mostrecent />
              <br />
              <br />
              <br />
              <br />
              <hr />
              <br />
              <Products/>
              <Featuredproducts/>
              <Latest/>
              <Offer/>
              <Footer />
            </>
            </Route>

          <Route exact path="/login">
              <Login/>
          </Route>

          <Route exact path="/profile">
              <Profile/>
          </Route>

          <Route exact path="/prodetails">
                <Prodetails/>
          </Route>

          <Route exact path="/card">
            <Card/>
      </Route>
       <Route exact path="/buynow">
            <Buynow/>
       </Route>
        </Switch>
      </BrowserRouter>
</>
  )
}
export default App;









function Card() {

  function Click(e) {
    localStorage.setItem("key", JSON.stringify(e))
    console.log("vhggui");
  }

  var card = [
    {
      img: "https://5.imimg.com/data5/VK/GS/MY-10281336/mens-cotton-500x500.jpg",
      name: "shirt",
      price: "655",
      des: "Ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quaerat qui maxime exercitationem quod quidem, quam sequi repudiandae, cumque necessitatibus, consequatur voluptas ipsum accusamus similique"



    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5Rtb1BXtNU0f3LlgSaye5rEHtcBKmHjEYw&usqp=CAU.jpg",
      name: "T shirt",
      price: "500",
      des: "Ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quaerat qui maxime exercitationem quod quidem, quam sequi repudiandae, cumque necessitatibus, consequatur voluptas ipsum accusamus similique"


    },

    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      name: "Shoes",
      price: "$ 855",
      des: "Ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quaerat qui maxime exercitationem quod quidem, quam sequi repudiandae, cumque necessitatibus, consequatur voluptas ipsum accusamus similique"

    },

    

    
  ]
  return (
    <>
      <div className="product">
        <div className="pro">
          <h2> All Products</h2>
          <div className="card">
            {
              card.map((e) => (
                <div onClick={() => { Click(e) }} className="details">
                  <a href="/prodetails"> <img src={e.img} /></a>
                  <h5>{e.name}</h5>
                  <h6>{e.price}</h6>


                </div>
              ))
            }
          </div>
        </div>
        <div />
      </div>
      <div />

    </>
  )
}
export default Card;  





function Profile() {
  return (
      <>
          <div className="profile">
              <h1>My Account</h1>
              <br />
              <input type="text" />
              <hr />
              <h3>Contact number : </h3>
          </div>

          <div className="details">
              <div className="orders">
                  <h2>My Orders</h2>
                  <hr />
              </div>

              <div className="wishlist">
                  <h2>My wishlist</h2>
                  <hr />
              </div>

              <div className="review">
                  <h2>My reviews</h2>
                  <hr />
              </div>

              <div className="addresses">
                  <h2>My Addresses</h2>
                  <hr />
              </div>
          </div>

          <div>
              <button>Notification setting</button>
              <hr />
              <button>Account setting</button>
              <hr />
              <button>Logout</button>
              <hr />

          </div>

      </>
  )
}
export default Profile;









import { useState } from "react";

function Card() {
 const [card, setCard] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
    })
  }, [])

  
  return (
    <>
      <div className="product">
        <div className="pro">
          <h2> All Products</h2>
          <div className="card">
            {
              card.map((e) => (
                <div onClick={() => { Click(e) }} className="details">
                  <a href="/prodetails"> <img src={e.img} /></a>
                  <h5>{e.name}</h5>
                  <h6>{e.price}</h6>


                </div>
              ))
            }
          </div>
        </div>
        <div />
      </div>
      <div />

    </>
  )
}
export default Card;  