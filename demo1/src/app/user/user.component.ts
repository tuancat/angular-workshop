import { Component, OnInit } from '@angular/core';

import { data } from './model/data.model';
import { TableService } from './service/table.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  dataList: data[];
  selectedValue : string;
  constructor(private tableService: TableService) {
    this.dataList = tableService.getData();
  }

  onChange(value: string) {
    //this.dataList.sort((a, b) => (typeof a[value] == 'string') ? a[value].localeCompare(b[value]) : a[value] - b[value]);
    console.log(value);
    this.selectedValue = value;
  }

}
