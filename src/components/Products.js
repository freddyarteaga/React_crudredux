import React, { Fragment, useEffect } from 'react';
import Product from './Product';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAction } from '../actions/productActions'

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // check the api
        const loadProducts = () => dispatch( getProductsAction() );
        loadProducts();

    }, []);

    // obtain state
    const products = useSelector( state => state.products.products );
    console.log(products);

    return ( 
        <Fragment>
            <h2 className='text-center my-5'>List Products</h2>

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.length === 0 ? 'There are no products' : (
                        products.map(product => (
                            <Product 
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Products;