import axios from "axios";
import { useEffect, useState } from "react";
import "./api.css";
import Profilee from "./profilee";

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    })
  }, [])
  return (
    <>
      <div className="head">
        <div className="header">
          <h1>TRENDING FASHIONS</h1>
          <div className="navbar">
            <a id="home"href="#">HOME</a>
            <a id="profile" href="/profilee">PROFILE</a>
            <a id="login" href="#">LOGIN</a>
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
    </>
  )
}
export default App