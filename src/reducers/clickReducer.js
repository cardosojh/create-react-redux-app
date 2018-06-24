import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';

const initialState = {
  newValue: 'Atualizado via Redux'
};

export const clickReducer = (state = initialState, action) => {
  console.log('Executou clickReducer');
  console.log(action.type);
  switch(action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };    
    default:
      return state;
  }
}