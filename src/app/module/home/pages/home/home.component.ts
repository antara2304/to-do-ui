import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public value: string = '';
  public cards = [
    {
      title: 'Card1',
      time: '',
    },
    {
      title: 'Card1',
      time: '',
    },
    {
      title: 'Card1',
      time: '',
    },
    {
      title: 'Card1',
      time: '',
    },
    {
      title: 'Card1',
      time: '',
    },
    {
      title: 'Card1',
      time: '',
    },
    {
      title: 'Card1',
      time: '',
    },
  ];
  create() {
    console.log('crreate');
  }
}
