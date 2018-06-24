import { ON_CHANGE_UPDATE_VALUE } from '../actions/actionsTypes';

const initialState = {
  newValueCustom: 'Atualizado via Redux(onChange)'
};

export const changeValueReducer = (state = initialState, action) => {
  console.log('Executou changeValueReducer');
  console.log(action.type);
  switch(action.type) {    
    case ON_CHANGE_UPDATE_VALUE:
      return {
        ...state,
        newValueCustom: action.newValueCustom
      };
    default:
      return state;
  }
}