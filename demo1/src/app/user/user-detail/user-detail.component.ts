import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../service/table.service';
import { data } from '../model/data.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetail: data | undefined;

  constructor(private activedRoute: ActivatedRoute,
    private router: Router,
    private tableService: TableService) {
      console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      this.userDetail = this.tableService.getUser(params.id);
    }); // Oservable ~ Oserver
  }

}
