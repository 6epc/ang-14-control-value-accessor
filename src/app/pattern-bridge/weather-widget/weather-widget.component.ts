import { IWidget } from './../widget.interface';
import { Component, OnInit } from '@angular/core';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: WeatherWidgetComponent,
  }]
})
export class WeatherWidgetComponent implements OnInit, IWidget {
  isLoading = false;

  constructor() { }

  ngOnInit(): void { }

  load() {
    console.log('Load data from WEATHER API...');
  }

  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }

}
