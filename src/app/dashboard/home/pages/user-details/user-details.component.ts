import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
constructor(private route: ActivatedRoute) { }
data: any;

  ngOnInit(): void {
    this.route.data.subscribe((data:any) => {      
      this.data = data.data.data;
    });
  }
  
}
