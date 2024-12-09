import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `<img [src]="src" [alt]="alt" />`,
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src: string;
  @Input() alt: string;
}
