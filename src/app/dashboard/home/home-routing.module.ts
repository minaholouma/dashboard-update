import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { userDataResolver } from './resolver/user-data.resolver';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path :'userlist',component:UserListComponent},
  { path: 'user/:id',component: UserDetailsComponent,

  resolve: {data: userDataResolver},
},

  {path:'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
