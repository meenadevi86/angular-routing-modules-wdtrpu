import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
})
export class ActionButtonComponent {
  @Input() label: string;
  @Output() action = new EventEmitter<void>();
}
