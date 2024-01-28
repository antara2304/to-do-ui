import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  effect,
  signal,
} from '@angular/core';
import { IToDo } from '@app/data/interfaces/todo.interface';
import { ToDoService } from '@app/data/services/api/to-do.service';
import { TokenService } from '@app/data/services/api/token.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public checked: any[] = [];
  @Input() title: string | undefined = '';
  @Input() date: Date | undefined = new Date();
  @Input() inputId: string | undefined = '';
  @Input() isCompleted: boolean | undefined = false;
  @Output() deleteEvent = new EventEmitter();

  private token: any;
  private userID: string = '';

  private testingSignal = signal(this.checked);
  constructor(private tokenSvc: TokenService, private todoSvc: ToDoService) {
    // effect(() => {
    //   console.log(this.testingSignal());
    // });
  }
  ngOnInit() {
    this.token = this.tokenSvc.decodeToken();
    this.userID = this.token['id'];
  }

  onChange(event: any) {
    const updatedObj: IToDo = {
      // title: this.title,
      date: new Date(),
      isCompleted: this.isCompleted,
    };
    try {
      this.todoSvc.update(this.inputId, updatedObj).subscribe(() => {
        console.log('Updated Successfully');
      });
    } catch (error) {
      console.error(error);
    }
  }

  onEditCard() {
    const updatedObj: IToDo = {
      title: this.title,
      date: new Date(),
      isCompleted: this.isCompleted,
    };
    try {
      this.todoSvc.update(this.userID, updatedObj).subscribe(() => {
        console.log('Updated Successfully');
      });
    } catch (error) {
      console.error(error);
    }
  }
  onDelete() {
    try {
      this.todoSvc.delete(this.inputId).subscribe((data) => {
        console.log('To-do has been deleted successfully');
        this.deleteEvent.emit(true);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
