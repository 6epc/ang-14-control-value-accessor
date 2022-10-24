import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lock-input',
  templateUrl: './lock-input.component.html',
  styleUrls: ['./lock-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LockInputComponent,
      multi: true
    }
  ]
})
export class LockInputComponent implements OnInit, ControlValueAccessor {
  value!: boolean;
  disabled = false;
  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: boolean): void {
    this.value = obj // this.value gets data from isLocked: new FormControl(true)
  }

  registerOnChange(fn: any): void { //
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  //every click we change true to false or false to true. And then obtained value is updates the value of the FormControll (isLocked)
  setValue() {
    if (this.disabled) {
      return
    }
    this.value = !this.value
    this.onChange(this.value)  //this is how we update the value of isLocked: new FormControl(true)
    this.onTouched() // function that changes form state to "touched". it worsk when we click on FormControll: isLocked
  }


}
