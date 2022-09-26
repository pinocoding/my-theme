import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from '../../models/product';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products: Product[] | any;

  responsiveOptions;

  constructor(private productService: ProductService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }
}
