import React from 'react';

const NewProduct = () => {
    return ( 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Add New Product
                        </h2>

                        <form>
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