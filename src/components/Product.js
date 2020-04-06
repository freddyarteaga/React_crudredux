import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({ product }) => {
    const { name, price, id } = product;

    const dispatch = useDispatch();
    const  history = useHistory(); // enable history for redirection

    // confirm delete
    const confirmDeleteProduct = id => {

        // ask the user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
                
                // pass it to action
                dispatch( deleteProductAction(id) );

            }
          })

    }

    // function that redirects on a scheduled basis
    const redirectEdition = product => {
        history.push(`/products/edit/${product.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'>${price}</span></td>
            <td className='actions'>
                <button
                    type='button'
                    onClick={ () => redirectEdition(product) } 
                    className='btn btn-primary mr-2'
                >
                    Edit
                </button>
                <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmDeleteProduct(id)}
                >Delete</button>
            </td>
        </tr>
     );
}
 
export default Product;