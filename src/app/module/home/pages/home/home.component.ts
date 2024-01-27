import { Component } from '@angular/core';
import { IToDo } from '@app/data/interfaces/todo.interface';
import { ToDoService } from '@app/data/services/api/to-do.service';
import { TokenService } from '@app/data/services/api/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isNewTask: boolean = false;
  public value: string = '';
  public cards: IToDo[] = [];

  constructor(private tokenSvc: TokenService, private todoSvc: ToDoService) {}

  ngOnInit() {
    try {
      this.todoSvc.read(this.tokenSvc.decodeToken()).subscribe((data) => {
        this.cards = data as IToDo[];
      });
    } catch (error) {
      console.error(error);
    }
  }
  create() {
    this.isNewTask = true;
  }

  onSaveNewTask(event: IToDo) {
    this.cards.push(event);
    this.isNewTask = false;
  }

  onDelete(event: boolean) {
    this.isNewTask = false;
  }
}
