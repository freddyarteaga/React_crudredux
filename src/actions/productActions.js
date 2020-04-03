import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';
import clientAxios from '../config/axios';

// Create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // insert API
            await clientAxios.post('/products', product);

            // if all goes well update the state
            dispatch( addProductSuccess(product) )

        } catch (error) {
            console.log(error);
            // if there is an error change the state
            dispatch( addProductError(true) )
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

// if prodcut save in the BD
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// if there was an error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})