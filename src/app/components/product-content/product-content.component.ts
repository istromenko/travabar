import { Component, Input } from '@angular/core';
import { Product } from "../../interface/product.interface";

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent {
  @Input() set products(products: Product[]) {
    this.tags = Array.from(new Set(products.reduce((acc: string[], p) => {
      return acc.concat(p.tags.toLocaleLowerCase().split(','));
    }, []))).sort();
    this._products = products;
  };
  get products(): Product[] {
    return this._products;
  }
  tags: string[] = [];
  selectedTags: string[] = [];

  private _products: Product[] = []

  isDisplayNone(tags: string, displayTags: string[]): boolean {
    if(!displayTags || !displayTags.length) {
      return false;
    }
    return displayTags.some(searchTag => !tags.toLocaleLowerCase().includes(searchTag))
  }

  constructor() { }

}
