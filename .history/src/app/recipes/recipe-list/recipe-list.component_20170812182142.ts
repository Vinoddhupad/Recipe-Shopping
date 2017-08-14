import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Navratan Kurma', 'North indian dish', 'https://myfancypantry.files.wordpress.com/2012/04/untitled-04473.jpg'),
    new Recipe('Mysore Masala Dosa', 'Karnataka Special', 'https://jfcfoodconsulting.files.wordpress.com/2015/07/masala-dosa1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
