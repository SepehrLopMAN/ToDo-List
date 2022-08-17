import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasklistService } from 'src/app/services/tasklist-service/tasklist.service';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.scss'],
})
export class TaskAdderComponent implements OnInit {
  showForm: boolean = false;
  _taskForm!: FormGroup;

  constructor(protected taskService: TasklistService) {}

  ngOnInit(): void {
    this._taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      discription: new FormControl(),
      importance: new FormControl(false, [Validators.required]),
      deadline: new FormControl(),
    });
  }
}
