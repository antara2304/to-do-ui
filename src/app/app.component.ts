import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  title = 'to-do-ui';
  public isAuth = false;
  constructor() {}
  ngDoCheck() {
    if (localStorage.getItem('token')) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
}
