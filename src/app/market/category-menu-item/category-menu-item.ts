import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css'
})
export class CategoryMenuItem {
  @Input() categoryName: string = '';

  @Output() itemClicked = new EventEmitter<string>();

  onItemClick() {
    this.itemClicked.emit(this.categoryName);
  }
}