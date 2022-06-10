import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatChip, MatChipList } from "@angular/material/chips";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { map, Subscription } from "rxjs";

@Component({
  selector: 'app-chips-multi-select',
  templateUrl: './chips-multi-select.component.html',
  styleUrls: ['./chips-multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChipsMultiSelectComponent,
      multi: true,
    },
  ],
})
export class ChipsMultiSelectComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
  @Input() options: string[] = [];
  @ViewChild(MatChipList) chipList!: MatChipList;
  value: string[] = [];
  disabled = false;
  onChange!: (value: string[]) => void;

  private subscribes = new Subscription();

  ngAfterViewInit() {
    this.selectChips(this.value);

    this.subscribes.add(this.chipList.chipSelectionChanges
      .pipe(
        map((event) => event.source))
      .subscribe((chip) => {
        if (chip.selected) {
          this.value = [...this.value, chip.value];
        } else {
          this.value = this.value.filter((o) => o !== chip.value);
        }

        this.propagateChange(this.value);
      }));
  }

  toggleSelection(chip: MatChip, event: MouseEvent) {
    if (chip.selectable && !chip.disabled) {
      chip.toggleSelected(true);
    }
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.subscribes.unsubscribe();
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  propagateChange(value: string[]) {
    if (this.onChange) {
      this.onChange(value);
    }
  }

  writeValue(value: string[]): void {
    if (this.chipList && value) {
      this.selectChips(value);
    } else if (value) {
      this.value = value;
    }
  }

  selectChips(value: string[]) {
    this.chipList.chips.forEach((chip) => chip.deselect());

    const chipsToSelect = this.chipList.chips.filter((c) =>
      value.includes(c.value)
    );

    chipsToSelect.forEach((chip) => chip.select());
  }

}
