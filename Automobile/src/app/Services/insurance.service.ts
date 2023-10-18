import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class InsuranceService {
  private url="http://localhost:3000/insuranceCompany";
  constructor(private http:HttpClient) { }

getInsuranceComData(id:any){
 return this.http.get(`${this.url}/${id}`)
}

updateInsurance(id:any,data:any){
  return this.http.put(`${this.url}/${id}`,data)
}

}
