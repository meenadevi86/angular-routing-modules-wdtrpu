import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
})
export class IllustrationComponent {
  @Input() illustration: string;
}
