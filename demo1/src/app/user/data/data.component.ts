import { Component, OnInit, Input } from '@angular/core';
import { data } from '../model/data.model';

@Component({
  selector: '[appData]',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  @Input()
  data: data;
  constructor() { }

  ngOnInit() {
  }

}
