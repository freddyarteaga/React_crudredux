import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // new state product
    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    })

    // product to edit
    const productedit = useSelector(state => state.products.productEdit);

    // fill the state automatically

    useEffect ( () => {
        saveProduct(productedit);
    }, [productedit] )

    // read form data
    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }


    console.log(product)
    const { name, price } = product;

    const submitEditProduct = e => {
        e.preventDefault();

        dispatch(editProductAction(product));

        history.push('/');
    }

    return ( 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Edit Product
                        </h2>

                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className='form-group'>
                                <label>Name Product</label>
                                <input  
                                    type='text'
                                    className='form-control'
                                    placeholder='Name Product'
                                    name='name'
                                    value={name}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Price Product</label>
                                <input  
                                    type='number'
                                    className='form-control'
                                    placeholder='Price Product'
                                    name='price'
                                    value={price}
                                    onChange={onChangeForm}

                                />
                            </div>

                            <button
                                ttype='submit'
                                className='btn btn-primary font-weight-bold text-uppercase
                                d-bloc w-100'
                            >Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;
