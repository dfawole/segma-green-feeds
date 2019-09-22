import SHOP_DATA from './shop.data'



const INITIALS_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIALS_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;