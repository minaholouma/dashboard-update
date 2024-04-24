import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;

  users: any = [];
  data: any;
  pageSize = 2;
  page!: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.loadUsers(1);

    this.userService.getUsers(1).subscribe(
      (data:any) => {
        this.users = data.data;
        console.log(data.data);
        this.page = data.page;
      },
      (err) => {
        console.log('Error');
      }
    );
  }


  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }
}
