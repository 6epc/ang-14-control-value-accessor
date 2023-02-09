import { IWidget } from './widget.interface';
import { InjectionToken } from "@angular/core";

export const WIDGET = new InjectionToken<IWidget>('Widget');
