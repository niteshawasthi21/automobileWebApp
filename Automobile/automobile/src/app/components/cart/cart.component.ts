import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: any;

  constructor(private cartServise: CartServiceService, 
    private ngxSpinner:NgxSpinnerService,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.getcartItem();
  }

  getcartItem(){
    this.ngxSpinner.show();
    this.cartServise.getCartData().subscribe(res=>{
      console.log(res);
      this.cartData = res;
   
      this.ngxSpinner.hide();
    })
  }

  deleteItem(data:any){
    this.ngxSpinner.show();
    this.cartServise.deleteItem(data.id).subscribe(res=>{
      this.ngxSpinner.hide();
      Swal.fire("Successfully Deleted");
      this.getcartItem();
    })
    
   
  
    
    this.getcartItem();
  }
}
