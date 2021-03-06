import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Action of Redux
import { createNewProductAction } from '../actions/productActions';
import { showAlert, hideAlertAction } from '../actions/alertActions';

const NewProduct = ({history}) => {

    // component state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState(0);

    // use useDispatch and create a function
    const dispatch = useDispatch();

    // access the store state
    const loading = useSelector( state => state.products.loading );
    const error = useSelector(state => state.products.error);
    const alert = useSelector(state => state.alert.alert);

    console.log(loading)

    // send to call the action of productActions
    const addProduct = (product) => dispatch( createNewProductAction(product) );

    // when the user do submit
    const submitNewProduct = e => {
        e.preventDefault();
        
        // validate form
        if(name.trim === '' || price <= 0) {

            const alert = {
                msg: 'both fields are mandatory',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch( showAlert(alert) );

            return;
        }

        // if there are no mistakes
        dispatch( hideAlertAction() );

        // create the new product
        addProduct({
            name,
            price
        });

        // redirect to Home
        history.push('/');
    }
    return ( 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Add New Product
                        </h2>

                        { alert ? <p className={alert.classes}>{alert.msg}</p> : null }

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
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
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
                                    onChange={e => savePrice(Number(e.target.value))}
                                />
                            </div>

                            <button
                                ttype='submit'
                                className='btn btn-primary font-weight-bold text-uppercase
                                d-bloc w-100'
                            >Add</button>
                        </form>

                        { loading ? <p>Loading...</p> : null }
                        { error ? <p className='alert alert-danger p2 mt-4 text-center'>There was a mistake</p> :
                        null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;