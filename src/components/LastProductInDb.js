import React, {useEffect, useState} from 'react';

// import productImg from '../assets/images/veoverde-sobres-compostables.jpg';

import "./LastProductInDb.css"


function LastProductInDb(){

    const [ lastProduct, setLastProduct ] = useState([]);
    const [ lastProductImage, setLastProductImage ] = useState("");


    useEffect(() => {
        console.log("me monté");
        fetch("https://veoverde.herokuapp.com/api/products/lastproduct")
            .then(response => response.json())
            .then(product => {
                setLastProduct([product.data]);
                setLastProductImage(product.data.image)
                console.log(product.data.image);
            })
    },[])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto en DB</h5>
                </div>
                {lastProduct.length === 0 && <div className="card-body"><div className={`lds-dual-ring-lastproduct`}></div></div>}
                {lastProduct.length !== 0 && 
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-2 px-sm-2 mt-2 mb-4" style={{width: 18 +'rem'}} src={lastProductImage} alt="Last Product in Data Base"/>
                        </div>
                        <h3>
                            {lastProduct[0].name}
                        </h3>
                        <p>
                            {lastProduct[0].description}
                        </p>
                        <h5>
                            ${lastProduct[0].price}
                        </h5>
                        {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                    </div>
            }   
            </div>
        </div>
    )
}

export default LastProductInDb;
