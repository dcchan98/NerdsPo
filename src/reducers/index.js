import { combineReducers } from 'redux';


const FoodReducer = (FoodList = [], action) => {
  if (action.type === 'FOOD/ADD_FOOD') {
    return action.payload;
  }

  return [...FoodList,action.foodItem];
};


const ProfileReducer = (Profile = {}, action) => {
  return {};
};


export default combineReducers({
  songs: FoodReducer,
  selectedSong: ProfileReducer
});