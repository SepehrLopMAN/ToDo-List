import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { taskList } from './tasklist.data';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {
  constructor() {}

  getData() {
    return of(taskList);
  }

  enableEditing(item: FormGroup): void {
    item.controls['editingStatus'].setValue(true);
    console.log(item.getRawValue());
  }

  modifyChanges(item: FormGroup): void {
    if (item.status === 'VALID') item.controls['editingStatus'].setValue(false);
    console.log(item.getRawValue());
  }

  initiateNewTask(taskAdderForm: FormGroup, formView?: Boolean) {
    if (taskAdderForm.status === 'VALID') {
      let date = new Date();
      const newTask = new FormGroup({
        title: new FormControl(taskAdderForm.value.title, [
          Validators.required,
        ]),
        discription: new FormControl(taskAdderForm.value.discription),
        importance: new FormControl(taskAdderForm.value.importance, [
          Validators.required,
        ]),
        deadline: new FormControl(taskAdderForm.value.deadline),
        completed: new FormControl(false, [Validators.required]),
        editingStatus: new FormControl(false, [Validators.required]),
        createdOn: new FormControl(
          `${date.getFullYear()}-${
            (date.getMonth() + 1) / 10 < 1
              ? '0' + (date.getMonth() + 1)
              : date.getMonth() + 1
          }-${date.getDate() / 10 < 1 ? '0' + date.getDate() : date.getDate()}`,
          [Validators.required]
        ),
      });
      taskList.add(newTask);
      taskAdderForm.reset({ importance: false });
      formView = false;
      console.log(newTask);
    }
  }

  deleteItem(item: FormGroup, dataList: Set<FormGroup>): void {
    confirm(`Confirm Deleting "${item.value.title}"?`)
      ? dataList.delete(item)
      : {};
  }
}
