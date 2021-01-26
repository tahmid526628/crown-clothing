import cartActionType from './cart.type';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cart_items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionType.ADD_ITEM:
            return{
                ...state,
                cart_items: addItemToCart(state.cart_items, action.payload)
            }

        case cartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cart_items: state.cart_items.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default cartReducer;