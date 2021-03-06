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
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
} from '../types';

// each reducer have your own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productEdit: null
}

export default function( state = initialState, action ) {
    switch(action.type) {
        case ADD_PRODUCT:
        case START_DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case PRODUCT_REMOVED_ERROR:
        case PRODUCT_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            default:
            return state;
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case OBTAIN_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }
        case PRODUCT_REMOVED_SUCCESS:
            return{
                ...state,
                products: state.products.filter( product => product.id !==
                state.productDelete ),
                productDelete: null
            }
        case OBTAIN_PRODUCT_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                productEdit: null,
                products: state.products.map( product => 
                    product.id === action.payload.id ? product = action.payload :
                    product
                )
            }
    }
}