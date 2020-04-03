import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Action od Redux
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {

    // use useDispatch and create a function
    const dispatch = useDispatch();

    // send to call the action of productActions
    const addProduct = () => dispatch( createNewProductAction() );

    // when the user do submit
    const submitNewProduct = e => {
        e.preventDefault();
        
        // validate form

        // if there are no mistakes

        // create the new product
        addProduct();
    }
    return ( 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Add New Product
                        </h2>

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className='form-group'>
                                <label>Name Product</label>
                                <input  
                                    type='text'
                                    className='form-control'
                                    placeholder='Name Product'
                                    name='name'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Price Product</label>
                                <input  
                                    type='number'
                                    className='form-control'
                                    placeholder='Price Product'
                                    name='price'
                                />
                            </div>

                            <button
                                ttype='submit'
                                className='btn btn-primary font-weight-bold text-uppercase
                                d-bloc w-100'
                            >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;