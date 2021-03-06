// ACTION TYPE
export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const UPDATE_RECIPE_STATE = 'UPDATE_RECIPE_STATE';

// ACTION CREATOR
export const addRecipe = recipe => ({ type: ADD_RECIPE, recipe });
export const removeRecipe = id => ({ type: REMOVE_RECIPE, id });
export const updateRecipeState = recipeId => ({
  type: UPDATE_RECIPE_STATE,
  recipeId,
});

// REDUCER
export default function recipeReducer(state = [], action) {
  switch (action.type) {
    case ADD_RECIPE:
    if(typeof action.recipe === "array") return state.concat(action.recipe[0]);
    return state.concat(action.recipe);//[...state, action.recipe];
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id);
    case UPDATE_RECIPE_STATE:
      console.log('recipe state is updated!');
      return state.map((recipe) => {        
        if (recipe.id === action.recipeId) {
          recipe.currentState++;
        }
        return recipe;
      });
    default:
      return state;
  }
}
