import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);








// we can also pass arguments as sequence without array
// eg.
// const selectCart = state => state.cart;
// const selectCurrentUser = createSelector(
//     selectUser,
//     selectCart,
//     (user, cart) => user.currentUser
// );