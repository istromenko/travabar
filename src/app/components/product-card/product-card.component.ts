import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../interface/product.interface";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {
    name: '',
    imageLink: '',
    tags: '',
    price: 0,
    compound: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
