import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

function ContentRowProducts(){

    // Estados
	const [ products, setProducts ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ categories, setCategories ] = useState(0);

    // Lo que vendria a reemplazar a componentDidMount()
	useEffect( () => {
		console.log("%cme monté", "color: green");
		fetch(`https://veoverde.herokuapp.com/api/products`)
			.then(response => response.json())
			.then(data => {
				setProducts(data.products);
				setCategories(data.meta.categories);
			})
			.catch(error => {
				console.error();
			})
        fetch(`https://veoverde.herokuapp.com/api/users`)
		.then(response => response.json())
		.then(data => {
			setUsers(data.users);			
		})
		.catch(error => {
			console.error();
		})
	}, []);

    /* <!-- Movies in DB --> */

    let productsInDB = {
        title: 'Productos en DB',
        color: 'primary', 
        quantity: products.length,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Total awards --> */

    let usersInDb = {
        title:'Users en DB', 
        color:'success', 
        quantity: users.length,
        icon:'fa-award'
    }

    /* <!-- Actors quantity --> */

    let categoriesInDB = {
        title: 'Categories in DB' ,
        color: 'warning',
        quantity: categories,
        icon: 'fa-user-check'
    }

    let cartProps = [productsInDB, usersInDb, categoriesInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (prop, i) => {

                return <SmallCard {...prop} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;