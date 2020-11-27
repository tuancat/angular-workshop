import {Component, OnInit} from '@angular/core';
import {TableService} from '../user/service/table.service';
import {data} from '../user/model/data.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataList: data[];

  constructor(private tableService: TableService, private router: Router) {
    this.dataList = tableService.getData();
  }

  ngOnInit() {
  }

  public newUser() {
    this.router.navigate(['/user-detail']);
  }
}
