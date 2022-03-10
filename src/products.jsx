function Products() {
    var products = [
        {
            image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            title: "Mens Casual Slim Fit",
            price: "$ 15.99 "
        },
        {
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            title: "Solid Gold Petite Micropave",
            price: "$ 168"
        },
        {
            image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            price: "$ 674"
        }

    ]
    return (
        <>
            <div className="promain">
                <div className="pro">
                    <h2>Trending Now</h2>

                </div>
               
                <div className="mainproducts">
                    {
                        products.map((e) => {
                            return (
                                <div className="begin">
                                    <a id="proimage" href="/card"> <img src={e.image} /></a>
                                   
                                    <h2 id="protitle">{e.title}</h2>
                                    <h3 id="proprice">{e.price}</h3>
                                </div>


                            )
                        })
                    }

                </div>
            </div>


        </>
    )
}
export default Products;