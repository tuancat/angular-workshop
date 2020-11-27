import { Component, OnInit, Input } from '@angular/core';
import { data } from '../model/data.model';

@Component({
  selector: '[appList]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  dataList: data[];
  constructor() { }

  ngOnInit() {
  }

}
