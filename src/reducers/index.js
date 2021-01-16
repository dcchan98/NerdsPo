import { combineReducers } from 'redux';


const FoodReducer = (FoodList = [], action) => {
  if (action.type === 'FOOD/ADD_FOOD') {
    return  [...FoodList,action.foodItem];
  }
  if (action.type === 'FOOD/DELETE_FOOD') {
    return  [...FoodList].filter(food => food!=action.foodItem);
  }

  return FoodList;
};


const ProfileReducer = (Profile = {name:"Name"}, action) => {
  return {};
};


export default combineReducers({
  foodList: FoodReducer,
  profileDetails: ProfileReducer
});