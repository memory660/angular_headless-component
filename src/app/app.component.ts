import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-headless-component';
  cats = ['Leo', 'Fluffy', 'Bandit', 'Houdini'];

  fileSelect(data: any) {
    console.log(data);
  }
}
