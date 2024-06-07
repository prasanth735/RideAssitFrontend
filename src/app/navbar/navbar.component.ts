import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  isLogedIn:boolean=false

  constructor(private service:RideService, private router:Router){

    this.service.logedinSubject.subscribe((data:any)=>this.isLogedIn=data)
  }


  signOut(){
    localStorage.clear()
    this.router.navigateByUrl("")

  }

}
