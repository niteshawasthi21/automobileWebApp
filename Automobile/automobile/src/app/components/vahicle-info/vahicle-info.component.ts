import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { InsuranceService } from 'src/app/Services/insurance.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vahicle-info',
  templateUrl: './vahicle-info.component.html',
  styleUrls: ['./vahicle-info.component.css']
})
export class VahicleInfoComponent implements OnInit {
  id: any;
  viewData: any;
  randomNumber!: number
  insuranceData: any
  userEmail!: string | null;
  constructor(private route: ActivatedRoute, private productservice: ProductServiceService, private insurance: InsuranceService) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.userEmail= localStorage.getItem("email");
    this.getProductDetails(this.id);
    this.randomNumber = Math.floor(Math.random() * 10) + 1;
    this.getInsuranceData(this.randomNumber)
  }

  getProductDetails(id: any) {
    this.productservice.getProductById(id).subscribe(res => {
      this.viewData = res;
    })
  }

  getInsuranceData(data: number) {
    this.insurance.getInsuranceComData(data).subscribe((val) => {
      this.insuranceData = val;
    })
  }

  sendDetails( ) {
    let userVechilData=Object.assign(this.viewData,{"User_Email":this.userEmail})
    this.insuranceData["userDetalis"].push(userVechilData); 
    this.insurance.updateInsurance(this.insuranceData.id,this.insuranceData).subscribe((res:any)=>{
      if(res){
        Swal.fire
        ('Data sent Successfully');
      }
      else{
        Swal.fire
        ('Error');
      }
    });
  }

}
