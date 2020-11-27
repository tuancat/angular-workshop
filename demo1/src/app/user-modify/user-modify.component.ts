import {Component, OnInit} from '@angular/core';
import {TableService} from '../user/service/table.service';
import {Router} from '@angular/router';
import {data} from '../user/model/data.model';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {
  user: data = new data();

  constructor(private tableService: TableService, private router: Router) {
  }

  ngOnInit() {
  }

  public saveUser() {
    this.tableService.addNew(this.user);
    this.router.navigate(['/user']);
  }
}
