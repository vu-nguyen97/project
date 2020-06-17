const initialState = {
  alert: null,
  is_show_edit_profile_form: false,
  is_show_setting_acc_dropdown: false
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALERT': return {
      ...state,
      alert: action.payload
    }

    case 'TOGGLE_PROFILE': return {
      ...state,
      is_show_edit_profile_form: !state.is_show_edit_profile_form
    }

    case 'TOGGLE_ACCOUNT': return {
      ...state,
      is_show_setting_acc_dropdown: !state.is_show_setting_acc_dropdown
    }
    default: return state;
  }
}

export default HomeReducer;