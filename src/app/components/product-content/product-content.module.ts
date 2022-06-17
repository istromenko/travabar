import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContentComponent } from "./product-content.component";
import { ClipsMultiSelectModule } from "../chips-multi-select/clips-multi-select.module";
import { ProductCardModule } from "../product-card/product-card.module";



@NgModule({
  declarations: [ProductContentComponent],
  imports: [
    CommonModule,
    ClipsMultiSelectModule,
    ProductCardModule,
  ],
  exports: [ProductContentComponent]
})
export class ProductContentModule { }
