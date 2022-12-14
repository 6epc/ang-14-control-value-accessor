import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss']
})
export class ValueAccessorExampleComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: new FormControl(),
      isLocked: new FormControl({ value: true, disabled: false })
    })
  }

  submit() {
    console.log(this.form.value);
  }
}
