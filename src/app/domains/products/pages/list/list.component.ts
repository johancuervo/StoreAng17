import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;
  ngOnInit(): void {
    this.getCategories();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {},
    });
  }
  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {},
    });
  }
}
