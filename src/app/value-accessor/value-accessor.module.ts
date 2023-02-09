import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';
import { LockInputComponent } from './lock-input/lock-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ValueAccessorExampleComponent,
    LockInputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ValueAccessorExampleComponent,
    LockInputComponent
  ]
})
export class ValueAccessorModule { }
