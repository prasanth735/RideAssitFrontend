import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorksummaryComponent } from './worksummary/worksummary.component';
import { WorkCreatComponent } from './work-creat/work-creat.component';
import { WorkListComponent } from './work-list/work-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    LoginComponent,
    NavbarComponent,
    WorksummaryComponent,
    WorkCreatComponent,
    WorkListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
