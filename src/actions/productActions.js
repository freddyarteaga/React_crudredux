import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    OBTAIN_PRODUCT_DELETE,
    PRODUCT_REMOVED_SUCCESS,
    PRODUCT_REMOVED_ERROR,
    OBTAIN_PRODUCT_EDIT,
    START_EDITION_PRODUCT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
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

        try {
            // setTimeout(async () => {
                const result = await clientAxios.get('/products');
                dispatch( downloadProductsSuccess(result.data) );
            // }, 3000);
           
        } catch (error) {
            console.log(error);
            dispatch( downloadProductsError() );
            
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
})

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
})

// select and remove the product
export function deleteProductAction(id) {

    return async (dispatch) => {
        dispatch( obtainProductDelete(id) );

        try {
            await clientAxios.delete(`/products/${id}`);
            dispatch( deleteProductSuccess() );

            //if removed show alert
            
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

        } catch (error) {
            console.log(error);
            dispatch( deleteProductError() );
        }

    }
}

const obtainProductDelete = id => ({
    type: OBTAIN_PRODUCT_DELETE,
    payload: id
});
const deleteProductSuccess = () => ({
    type: PRODUCT_REMOVED_SUCCESS
})
const deleteProductError = () => ({
    type: PRODUCT_REMOVED_ERROR,
    payload: true
})

// place product in edition
export function getProductEdit(product) {
    return (dispatch) => {
        dispatch( getProductEditAction(product) )
    }
}

const getProductEditAction = product => ({
    type: OBTAIN_PRODUCT_EDIT,
    payload: product
})

// edit register in api and state
export function editProductAction(product) {
    return async(dispatch) => {
        dispatch( editProduct() );

        try {
            clientAxios.put(`/products/${product.id}`, product);
            dispatch( editProductSuccess(product) );
        } catch (error) {
            
        }

    }
}
const editProduct = () => ({
    type: START_EDITION_PRODUCT
})
const editProductSuccess = product => ({
    type: PRODUCT_EDITED_SUCCESS,
    payload: product
})
