import { Pipe, PipeTransform } from '@angular/core';
import { IToDo } from '@app/data/interfaces/todo.interface';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(records: IToDo[], searchText: string): IToDo[] {
    if (!records || !searchText) {
      return records;
    }
    searchText = searchText.toLowerCase();
    return records.filter((item) =>
      Object.values(item).some((each) =>
        each.toString().toLowerCase().includes(searchText)
      )
    );
  }
}
