import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public cartItemList: any[] = [];
  public productList = new Subject<any>();
  data: any;
  private url = "http://localhost:3000/CartItem"  
  public search = new BehaviorSubject<string>('');
  
  constructor(private http:HttpClient) { }

  
  sendCartData(data:any){
    return this.http.post(this.url,data);
  }

  getCartData(){
    return this.http.get(this.url);
  }

  deleteItem(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }


  addtocart(data: any) {
    this.getCartData().subscribe(res=>{
     this.cartItemList.push(res);
     this.productList.next(this.cartItemList.length);
    })
   
   if (localStorage.getItem("email")) {
     data.userEmail = localStorage.getItem('email');
     this.sendCartData(data).subscribe((res) => {
       console.log(res);
       Swal.fire('Successfully Added');
     });
   } else {
     Swal.fire("Please Login")
   }
 }
  
}

