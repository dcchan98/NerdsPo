// Action creator
import Food from "../model/food"

export const addFood = (name, p, c, f, id) => {
  // Return an action
  return {
    type: 'FOOD/ADD_FOOD',
    foodItem: new Food(name, p, c, f, id)
  };
};