import { combineReducers } from 'redux';


const FoodReducer = (FoodList = [], action) => {
  if (action.type === 'FOOD/ADD_FOOD') {
    return  [...FoodList,action.foodItem];
  }

  return FoodList;
};


const ProfileReducer = (Profile = {}, action) => {
  return {};
};


export default combineReducers({
  foodList: FoodReducer,
  profileDetails: ProfileReducer
});