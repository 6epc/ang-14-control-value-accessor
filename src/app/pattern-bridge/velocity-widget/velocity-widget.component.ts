import { IWidget } from './../widget.interface';
import { Component, OnInit } from '@angular/core';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: VelocityWidgetComponent,
  }]

})
export class VelocityWidgetComponent implements OnInit, IWidget {
  isRefreshing = false;

  constructor() { }

  ngOnInit(): void {
  }

  load() {
    console.log('Load data from Jira API...');
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }

}
