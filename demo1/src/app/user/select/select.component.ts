import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Output()
  changeSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChangeSelect(select: HTMLSelectElement) {
    this.changeSelect.emit(select.options[select.selectedIndex].value);
  }
}
