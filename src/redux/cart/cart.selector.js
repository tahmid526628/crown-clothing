import { createSelector } from 'reselect';

const selectCart = state => state.cart; // it's a input selector

// const selectUser = state => state.user;

// export const selectCartItems = createSelector(
//     [selectCart, selectUser],
//     ( cart, user ) => 
// )

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cart_items
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cart_items) => cart_items.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
)