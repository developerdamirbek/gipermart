const initialState = {
    likedProducts: [],
  };
  
  const ADD_TO_LIKED = 'ADD_TO_LIKED';
  const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED';
  
  export const addToLiked = (product) => ({
    type: ADD_TO_LIKED,
    payload: product,
  });
  
  export const removeFromLiked = (productId) => ({
    type: REMOVE_FROM_LIKED,
    payload: productId,
  });
  
  const likedReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_LIKED:
        
        return {
          ...state,
          likedProducts: [...state.likedProducts, action.payload],
        };
        
      case REMOVE_FROM_LIKED:
        return {
          ...state,
          likedProducts: state.likedProducts.filter((id) => id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default likedReducer;
  