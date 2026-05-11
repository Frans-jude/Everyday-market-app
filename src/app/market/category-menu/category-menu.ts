import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../model/category';
import { CategoryMenuItem } from '../category-menu-item/category-menu-item';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItem],
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css'
})
export class CategoryMenu {
  @Input() categories: Category[] = [];

  @Output() categorySelected = new EventEmitter<string>();

  onItemClicked(categoryName: string) {
    this.categorySelected.emit(categoryName);
  }
}