import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipeVisible = false;
  shoppingListVisible = false;
  constructor() { }

  ngOnInit() {
  }

  displayRecipe () {
    this.recipeVisible = true;
    this.shoppingListVisible = false;
  }

  displayShoppingList () {
    this.recipeVisible = false;
    this.shoppingListVisible = true;
  }
}
