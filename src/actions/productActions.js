import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR
} from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2'

// Create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // insert API
            await clientAxios.post('/products', product);

            // if all goes well update the state
            dispatch( addProductSuccess(product) )

            // Alert
            Swal.fire(
                'Correct',
                'the product was added correctly',
                'success'
            );

        } catch (error) {
            console.log(error);
            // if there is an error change the state
            dispatch( addProductError(true) )

            // alert of error
            Swal.fire({
                icon: 'error',
                title: 'There was a mistake',
                text: 'There was a mistake, try again'
            })
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

// function that downloads the products from the database
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() )
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
})