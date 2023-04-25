import { Component } from '@angular/core';
import { Category } from '../Models/category';
import { CategoryRepository } from '../Models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  //category tipinde liste
  categories: Category[];
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }
}
