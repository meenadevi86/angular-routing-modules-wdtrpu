import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss'],
})
export class MessageComponent {
  title = 'Op dit moment vindt er geen conversatie plaats.';
  description =
    'Ga naar de sectie chat om handmatig een conversatie te starten.';
}
