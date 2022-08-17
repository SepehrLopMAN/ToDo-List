import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasklistService } from 'src/app/services/tasklist-service/tasklist.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent implements OnInit {
  data!: Set<FormGroup>;
  filterData: FormGroup = new FormGroup({
    searchKey: new FormControl(''),
    completedFilter: new FormControl(false, [Validators.required]),
    importanceFilter: new FormControl(false, [Validators.required]),
  });
  page: number = 1;

  constructor(protected taskService: TasklistService) {}

  ngOnInit(): void {
    this.taskService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log(error);
        throw new Error("Couldn't load data!");
      }
    );
  }
}
