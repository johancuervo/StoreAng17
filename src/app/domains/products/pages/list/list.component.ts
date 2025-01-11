import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://homecenterco.scene7.com/is/image/SodimacCO/226715',
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 200,
        image: 'https://homecenterco.scene7.com/is/image/SodimacCO/226716',
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 500,
        image: 'https://homecenterco.scene7.com/is/image/SodimacCO/226716',
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 450,
        image: 'https://homecenterco.scene7.com/is/image/SodimacCO/226716',
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 320,
        image: 'https://homecenterco.scene7.com/is/image/SodimacCO/226716',
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 6',
        price: 110,
        image: 'https://homecenterco.scene7.com/is/image/SodimacCO/226716',
        createdAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }
  fromChild(event: string) {
    console.log('estamos desde el padre');
    console.log(event);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
