import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this test',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplyrecipes.om%2Frecipes%2Fgrilled_sweet_potatoes%2F&psig=AOvVaw2wOCtbf7wTc_aMpeG2U8UI&ust=1625555366929000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCRn-yvy_ECFQAAAAAdAAAAABAK'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
