import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
export class CardComponent implements OnInit, OnChanges {
  public checked: any[] = [];
  @Input() title: string | undefined = '';
  @Input() date: Date | undefined = new Date();
  @Input() inputId: string | undefined = '';
  @Input() isCompleted: boolean | undefined = false;
  private userID: string = '';

  private testingSignal = signal(this.checked);
  constructor(private tokenSvc: TokenService, private todoSvc: ToDoService) {
    effect(() => {
      console.log(this.testingSignal());
    });
  }
  ngOnInit() {
    this.userID = this.tokenSvc.decodeToken();
  }
  ngOnChanges() {
    console.log(this.isCompleted);
  }

  onChange(event: any) {
    console.log(event);

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
}
