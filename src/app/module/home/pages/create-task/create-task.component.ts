import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ToDoService } from '@app/data/services/api/to-do.service';
import { TokenService } from '@app/data/services/api/token.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  public value = '';
  public signalValue = signal(this.value);

  constructor(private tokenSvc: TokenService, private todoSvc: ToDoService) {}

  @Output()
  public deleteEvent = new EventEmitter<boolean>();

  @Output()
  public createEvent = new EventEmitter<any>();

  save() {
    try {
      const newTaskObj = {
        userID: this.tokenSvc.decodeToken(),
        title: this.value,
        date: new Date(),
      };
      this.todoSvc.create(newTaskObj).subscribe(() => {
        console.log('New task has been created successfully');
      });
      this.createEvent.emit({ title: this.value });
    } catch (error) {
      console.error(error);
    }
  }
  delete() {
    this.deleteEvent.emit(true);
  }
}
