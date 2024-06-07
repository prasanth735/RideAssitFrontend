import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {

  customers:any

  constructor(private service:RideService){

    this.ngOnInit()

    this.service.isAuthenticated()

  }

  ngOnInit(){

    this.service.getcustomers().subscribe(data=>this.customers=data)
  }


  handleDelete(id:any){
    this.service.deletecustomer(id).subscribe(data=>{
      this.ngOnInit()     
    })
  }

  generatePdf(id:any){

    let customerDetail=this.customers.find((cust:any)=>cust.id=id)

    console.log("pdf",customerDetail);
    

    let body=[]

    for (let work of customerDetail.works ){
      body.push([work.title,work.description,work.amount])
    }
    console.log(body);
    
    
    const doc=new jsPDF()

    autoTable(doc, {
      head: [['title', 'Description', 'Amount']],
      body:body,
    })


    doc.save('table.pdf')

  }


}
