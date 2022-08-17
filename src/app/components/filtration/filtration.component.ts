import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss'],
})
export class FiltrationComponent implements OnInit {
  @Input() formData: FormGroup = new FormGroup({
    searchKey: new FormControl(''),
    completedFilter: new FormControl(false),
    importanceFilter: new FormControl(false),
  });
  constructor() {}

  ngOnInit(): void {}
}
