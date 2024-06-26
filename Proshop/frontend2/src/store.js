import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { 
    orderDetailsReducer,
    orderCreateReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,
} from './reducers/orderReducers'

//Combine reducers into one central reducer
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,

    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
});

//Create the initial state of the store
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
        JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
     },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

//Create the Redux store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store