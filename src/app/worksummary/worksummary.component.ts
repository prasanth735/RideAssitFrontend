import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-worksummary',
  templateUrl: './worksummary.component.html',
  styleUrls: ['./worksummary.component.css']
})
export class WorksummaryComponent {


  custId:any 

  constructor(private route:ActivatedRoute, private service:RideService){

    this.service.isAuthenticated()

    this.custId=this.route.snapshot.params["id"]

    console.log(this.custId);
    
  }

}
