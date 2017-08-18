import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  onSelectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe('Navratan Kurma', 'North indian dish', 'https://myfancypantry.files.wordpress.com/2012/04/untitled-04473.jpg'),
    new Recipe('Mysore Masala Dosa', 'Karnataka Special', 'https://jfcfoodconsulting.files.wordpress.com/2015/07/masala-dosa1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
