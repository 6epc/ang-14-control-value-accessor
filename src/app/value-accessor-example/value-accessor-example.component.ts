import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlState, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss']
})
export class ValueAccessorExampleComponent implements OnInit {
  form!: FormGroup;
  data: FormControlState<boolean> = { value: true, disabled: false };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: new FormControl(),
      isLocked: new FormControl(this.data)
    })
  }

  submit() {
    console.log(this.form.value);
  }
}
