import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  filterCategory!: any;
  searchTerm = '';



  constructor(private data: ProductServiceService,
    private ngxSpinner: NgxSpinnerService,
    private cartDataSer: CartServiceService,
    private _route: Router,
    public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.data.getprouducts().subscribe(res => {
      this.filterCategory = res;
      this.ngxSpinner.hide();
    })
  }

  changeLanguage(language: any) {
    this.translate.use(language.target.value);
  }

  filtered() {
    return this.filterCategory?.filter((item: { type: string, year: any }) => {
      return (
        item.type?.toLowerCase()?.includes(this.searchTerm?.toLowerCase()) ||
        item.year.toString().includes(this.searchTerm));
    });
  }


  addtocart(data: any) {
     this.cartDataSer.addtocart(data)
  }
}
