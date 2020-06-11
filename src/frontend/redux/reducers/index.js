const initialState = {
  alert: null
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALERT': return {
      ...state,
      alert: action.payload
    }
    default: return state;
  }
}

export default HomeReducer;