import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngClass]="classes" (click)="onClick()">{{ text }}</button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() classes: string[];
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
