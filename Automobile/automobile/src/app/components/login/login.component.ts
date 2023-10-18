import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { authservice } from 'src/app/Services/auth-service.service';
// import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginForm:any;
  userEnterData: any;
  decryptData: any;
  componentName = 'login Component';
  result: any;
  screctkey = "123";
  status: any;
  dataa: any[] = [];
  constructor(private loginAuth: authservice, private _route: Router, private ngxSpinner: NgxSpinnerService) { }

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z . 0-9]+$'),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z @ 0-9]+$'),
    ]),
  });

  getFormValue() {
    this.ngxSpinner.show();
    this.userEnterData = this.loginForm.value;
    console.log(this.userEnterData);
    this.loginAuth.loginUser().subscribe((res) => {
      console.log(res);
      for (let a of res) {
        this.dataa.push(a);
      }
      this.dataa.push(res);
      let findUser = this.dataa?.find((res: any) => {
        return (
          res.userName == this.userEnterData.username &&
          res.email == this.userEnterData.Email &&
          res.password == this.userEnterData.Password
        )
      })
      if (findUser) {
        this._route.navigateByUrl('dashboard');
        localStorage.setItem('email', this.userEnterData?.Email);
      } else {
        Swal.fire
          ('User Not Found');
      }
      this.ngxSpinner.hide();
    });
  }

  get username() {
    return this.loginForm.get('userName');
  }

  get Email() {
    return this.loginForm.get('Email');
  }

  get Password() {
    return this.loginForm.get('Password');
  }
  ngOnInit(): void {
    // this.getFormValue();
  }
}
