import { Component } from '@angular/core';
import { Message } from './messages/message.module';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = new Message ('A message.', 'Sreng');
}