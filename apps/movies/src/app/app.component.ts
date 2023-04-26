import { Component } from '@angular/core';
import { hello, goodbye } from '@sample/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  subtitle = 'Is Here!';

  hello() {
    this.title = hello('From F# and Typescript!');
  }

  goodbye() {
    this.subtitle = goodbye('Excuses for not trying out F# :P');
  }
}
