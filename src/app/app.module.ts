import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ValueAccessorModule } from './value-accessor/value-accessor.module';
import { PatternBridgeModule } from './pattern-bridge/pattern-bridge.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ValueAccessorModule,
    PatternBridgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
