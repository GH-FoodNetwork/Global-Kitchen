import { objectAtlas, setup } from './atlases';
import { gameplayStage } from './main';

class Recipe {
  constructor(title, ingredients = [], finishedDish, steps = [], linkToRecipe) {
    this.title = title;
    this.ingredients = ingredients;
    this.finishedDish = finishedDish;
    this.steps = steps;
    this.linkToRecipe = linkToRecipe;
    this.currentState = 0;
    this.id = Math.random();
  }
}

class Jollof extends Recipe {
  constructor() {
    super(
      'Jollof',
      [objectAtlas.cookedRice, objectAtlas.tomatoPaste],
      objectAtlas.jollof,
      [
        { type: 'mixing', waitTime: '3' },
        { type: 'frying', waitTime: '3' },
        { type: 'serving', waitTime: '3'}
      ],
      'https://www.epicurious.com/recipes/food/views/african-jollof-rice'
    );
  }
}

/*const jollof = new Recipe(
  'Jollof Rice',
  [setup(, 'tomatoPasteImg'],
  'public/images/jollof.png',
  [
    { type: 'mixing', waitTime: '3' },
    { type: 'spices', waitTime: '3' },
    { type: 'fryer', waitTime: '3' },
  ],
  'link',
);*/

/*
 * NOTE: When calling a recipe from the recipeArray, you must use the `new` keyword to activate the constructor.
 * For example, to add a recipe to the store, you must call `store.dispatch(addRecipe(new recipeArray[idx]()))`
 * to add a new recipe Object to the store
 */

const recipeArray = [Jollof];

export default recipeArray;
