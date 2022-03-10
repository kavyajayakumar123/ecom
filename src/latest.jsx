function Latest() {
    var latest= [
        {
            image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            title:"DANVOUY Womens T Shirt Casual Cotton Short",
            price:" 12.99"
        },
        {
            image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            title:"Mens Casual Premium Slim Fit T-Shirts ",
            price:"22.3"
        },
        {
            image:"White Gold Plated Princess",
            title:"White Gold Plated Princess",
            price:"9.99"
        },
        {
            image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            title:"Mens Casual Slim Fit",
            price:"15.99"
        }
    ]
return (
        <>
            <div className="latmain">
                <div className="late">
                    <h2>Latest Products</h2>
               </div>
               <div className="mainlatest">
                   {
                       latest.map((e)=>{
                           return(
                               <div className="latestproducts">
                                   <img id="lateimage"src={e.image} alt="" srcset="" />
                                   <h2 id="latetitle">{e.title}</h2>
                                   <h3 id="lateprice">{e.price}</h3>

                               </div>
                           )
                       })
                   }

               </div>


            </div>
        </>
    )
}
export default Latest;