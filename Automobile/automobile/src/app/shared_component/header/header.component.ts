import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authservice } from 'src/app/Services/auth-service.service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemLength: any;
  userEmail: any;

  constructor(private cartService: CartServiceService,
    private cdRef: ChangeDetectorRef,
    private route: Router,
    private authService: authservice) { }

  totalItem: any;
  cart: boolean = true

  ngOnInit() {
    this.cartService.productList.subscribe(res=>{
      this.totalItem = res
     })
    this.cdRef.detectChanges();
    if (localStorage.getItem("email")) {
      this.cart = false
    } else {
      this.cart = true
    }
    this.cdRef.detectChanges()
  }

  logoutuser() {
    localStorage.clear();
    this.route.navigate(['/login'])
  }

}
