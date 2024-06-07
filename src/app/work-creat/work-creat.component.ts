import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-work-creat',
  templateUrl: './work-creat.component.html',
  styleUrls: ['./work-creat.component.css']
})
export class WorkCreatComponent implements OnInit {

  workForm=new FormGroup({
    title: new FormControl("",Validators.required),
    description:new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required)
  })




  @Input() custId:any

  constructor(private service:RideService){    

    
  }

  ngOnInit() {
    console.log("work list components",this.custId);
    
  }


  handleSubmit(){
    let formdata=this.workForm.value

    console.log(formdata)
    this.service.createWork(this.custId,formdata).subscribe(data=>{
      console.log(data);

      this.service.refreshWorklist()
      this.workForm.reset()
      }
    )
    
  }



}
