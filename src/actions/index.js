// Action creator
import Food from "../model/food"

export const addFood = (name, p, c, f, id) => {
  return {
    type: 'FOOD/ADD_FOOD',
    foodItem: new Food(name, p, c, f, id)
  };
};

export const deleteFood = (food) => {
  return {
    type: 'FOOD/DELETE_FOOD',
    foodItem: food
  };
};