import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
users: any;
  constructor(private router: Router,  private route: ActivatedRoute) {}

searchUsers(query: string): void {
  if (query.trim() !== '') {
    this.router.navigate(['/user', query]);
  }
}

data: any;

  ngOnInit(): void {
    this.route.data.subscribe((data:any) => {      
      this.data = data.data.data;
    });
  }



  }
