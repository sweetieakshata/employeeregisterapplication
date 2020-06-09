import {Routes,RouterModule} from '@angular/router'
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { UserGuardService } from './user-guard.service';


const arr : Routes=[
  {path:'',component:DefaultComponent},
  {path:'log',component:LoginComponent},
  {path:'home',canActivate:[UserGuardService],component:HomeComponent},
  {path:'emp',canActivate:[UserGuardService],component:EmployeedataComponent},
  {path:'abt',component:AboutComponent},
 
];

export const routing=RouterModule.forRoot(arr);
