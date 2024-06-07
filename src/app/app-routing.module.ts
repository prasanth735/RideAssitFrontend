import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { LoginComponent } from './login/login.component';
import { WorksummaryComponent } from './worksummary/worksummary.component';

const routes: Routes = [

  {path:"customers",component:CustomerlistComponent},
  {path:"customer/add",component:CustomerCreateComponent},
  {path:"customer/:id",component:CustomerDetailComponent},
  {path:"",component:LoginComponent},


  {path:"worksummary/:id",component:WorksummaryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
