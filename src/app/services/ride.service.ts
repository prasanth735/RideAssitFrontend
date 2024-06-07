import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RideService {


  refreshRequired=new Subject()

  constructor(private http:HttpClient) {

  }

   getcustomers(){
    return this.http.get("http://127.0.0.1:8000/api/customers",{"headers":this.getHeaders()})
   }

   retirevecustommers(id:any){
    return this.http.get(`http://127.0.0.1:8000/api/customers/${id}`,{"headers":this.getHeaders()})
   }

   creatcustomer(data:any){
    return this.http.post("http://127.0.0.1:8000/api/customers",data,{"headers":this.getHeaders()})
   }

   updatecustomer(id:any,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/customers/${id}`,data,{"headers":this.getHeaders()})
   }

   deletecustomer(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}`,{"headers":this.getHeaders()})
   }

   getTokenPair(data:any){

    return this.http.post("http://127.0.0.1:8000/api/token",data)
   }


   getAccesToken(){

    return localStorage.getItem("access")
   }


   getHeaders(){

    let token=this.getAccesToken()

    let headers=new HttpHeaders().set("Authorization","Bearer "+token)

    return headers
   }

   isAuthenticated(){

    this.logedinSubject.next("access" in localStorage ? true : false) 
   }


   logedinSubject=new Subject()


   createWork(id:any,data:any,){

     return this.http.post(`http://127.0.0.1:8000/api/customers/${id}/work`,data,{"headers":this.getHeaders()})

   }


   refreshWorklist(){
    this.refreshRequired.next(true)
   }


   

}
