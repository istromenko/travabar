import { NgModule } from "@angular/core";
import { ChipsMultiSelectComponent } from "./chips-multi-select.component";
import { MatChipsModule } from "@angular/material/chips";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ChipsMultiSelectComponent],
  imports: [
    MatChipsModule,
    CommonModule,
    MatIconModule
  ],
  exports: [ChipsMultiSelectComponent]
})
export class ClipsMultiSelectModule {
}
