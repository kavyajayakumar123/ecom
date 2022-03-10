function Featuredproducts() {
    var featuredproducts = [
        {
            image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            title: "MBJ Women's Solid Short Sleeve Boat Neck V",
            price: " $ 15.99"
        },

        {
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
            price: "$ 23.66"
        },

        {
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            title: "Solid Gold Petite Micropave",
            price: "$ 57.90"
        },
        {
            image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            price: "$ 40.00"
        },
    ]
    return (
        <>
            <div className="feamain">
               <div className="fea">
               <h2>Featured Products</h2>
                   </div> 
               

                <div className="mainfeature">
                    {
                        featuredproducts.map((e) => {
                            return (
                                <div className="feaproducts">
                                    <img id="feaimage"src={e.image} alt="" />
                                    <h2 id="featitle">{e.title}</h2>
                                    <h3 id="feaprice">{e.price}</h3>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}
export default Featuredproducts;