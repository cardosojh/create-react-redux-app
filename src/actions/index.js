import { CLICK_UPDATE_VALUE, ON_CHANGE_UPDATE_VALUE } from '../actions/actionsTypes';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const onChangeValue = value => ({
  type: ON_CHANGE_UPDATE_VALUE,
  newValueCustom: value
});