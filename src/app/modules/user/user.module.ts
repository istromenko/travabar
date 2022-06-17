import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from "./user-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { ProductContentModule } from "../../components/product-content/product-content.module";


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    MatIconModule,

    ProductContentModule,
  ],
  bootstrap: [UserComponent],
})
export class UserModule {
}
