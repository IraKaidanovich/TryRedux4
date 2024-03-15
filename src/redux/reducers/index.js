const initialState = {
  counter: []
};

function counterReducer(state=initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state, 
        counter: state.counter + 1
      };
    case 'DECREASE':
      return {
        ...state, 
        counter: state.counter - 1
      };
    case 'RESET':
      return initialState;
    
    default:
      return state;     
  }
}

export default counterReducer; 