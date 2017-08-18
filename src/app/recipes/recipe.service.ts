import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from '../shared/recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Navratan Kurma',
      'North indian dish',
      'https://myfancypantry.files.wordpress.com/2012/04/untitled-04473.jpg',
      [
        new Ingredient('Paneer', 10),
        new Ingredient('Masala packet', 1)
      ]
    ),
    new Recipe('Mysore Masala Dosa', 'Karnataka Special', 'https://jfcfoodconsulting.files.wordpress.com/2015/07/masala-dosa1.jpg', [
      new Ingredient('Potatos', 10),
      new Ingredient('Coconut', 1)
    ])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
