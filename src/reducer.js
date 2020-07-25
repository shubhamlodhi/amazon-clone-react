export const initialState = {
    basket:[
        {
        id: "324324324324",
        title:"The Lean Start Up",
            price: 11.96,
            rating: 5,
            image:"http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png",
    }
    ],
    user: null,
}

const INITIAL_STATE = {};

 const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            return {
                state
            };
            break;
        default:
            return state;
    }
};

export default reducer;