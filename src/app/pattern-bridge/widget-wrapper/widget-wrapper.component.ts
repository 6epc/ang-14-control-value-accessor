import { Component, ContentChild, OnInit } from '@angular/core';
import { VelocityWidgetComponent } from '../velocity-widget/velocity-widget.component';
import { IWidget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET as any, { static: true }) widget!:IWidget;

  constructor() { }

  ngOnInit(): void {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }

}
