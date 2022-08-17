import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({ name: 'filterItems' })
export class Filter implements PipeTransform {
  transform(
    data: Set<FormGroup>,
    filterGroup: {
      searchKey: string;
      completedFilter: boolean;
      importanceFilter: boolean;
    }
  ): Array<any> {
    return Array.from(data).filter((item: any): FormGroup | void => {
      if (
        (filterGroup.completedFilter && !item.value.completed) ||
        (filterGroup.importanceFilter && !item.value.importance)
      ) {
        return;
      }

      if (
        item.value.title
          ?.toLowerCase()
          .includes(filterGroup.searchKey?.toLowerCase()) ||
        item.value.discription
          ?.toLowerCase()
          .includes(filterGroup.searchKey?.toLowerCase())
      ) {
        return item;
      }
    });
  }
}
