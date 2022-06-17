import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from "./user-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { ClipsMultiSelectModule } from "../../components/chips-multi-select/clips-multi-select.module";
import { ProductCardModule } from "../../components/product-card/product-card.module";


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    MatIconModule,
    ClipsMultiSelectModule,
    ProductCardModule,

  ],
  bootstrap: [UserComponent],
})
export class UserModule {
}
