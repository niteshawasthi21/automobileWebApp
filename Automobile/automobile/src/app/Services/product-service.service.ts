import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url="http://localhost:3000/autoMobileProducts"
  constructor(private http:HttpClient) { }

  getprouducts(){
    return this.http.get(this.url);
  }

  getProductById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
}
