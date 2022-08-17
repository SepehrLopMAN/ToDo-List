import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({ name: 'sortItems' })
export class Sort implements PipeTransform {
  transform(value: Array<FormGroup>): Array<FormGroup> {
    return value
      .sort((a: FormGroup, b: FormGroup): number => {
        return a.value.importance < b.value.importance
          ? 1
          : a.value.importance > b.value.importance
          ? -1
          : 0;
      })
      .sort((a: FormGroup, b: FormGroup): number => {
        return a.value.completed > b.value.completed
          ? 1
          : a.value.completed < b.value.completed
          ? -1
          : 0;
      });
  }
}
