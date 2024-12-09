import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `<p [ngClass]="classes">{{ text }}</p>`,
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() text: string;
  @Input() classes: string[];
}
