import { useEffect, useState } from "react";
import axios from "axios";

function Card() {


    const [card, setCard] = useState([])
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setCard(res.data);
      })
    }, [])
  


  
  return (
    <>
      <div className="product">
        <div className="pro">
          <h2> All Products</h2>
          <div className="card">
            {
            card.map((e)=>{
              return(
                <img src={e.image}/>
              )
            })
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