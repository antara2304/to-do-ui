import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public value: string = '';
  @Output()
  public searchEvent = new EventEmitter<string>();

  constructor() {}

  onChange(data: any) {
    this.searchEvent.emit(data);
  }
}
