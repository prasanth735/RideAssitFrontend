import { Component, Input, OnInit } from '@angular/core';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit{


  @Input() custId:any
  works:any
  total:number=0

  constructor(private service:RideService){

    this.service.refreshRequired.subscribe(data=>{
      this.ngOnInit()
    })
    
  }

  ngOnInit() {
    console.log("work list components",this.custId);

    this.service.retirevecustommers(this.custId).subscribe((data:any)=>{

      this.works=data?.works
      this.total=data?.work_total
    }
      
      
    )
    
  }

}

