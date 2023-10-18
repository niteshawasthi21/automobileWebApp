import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { authservice } from 'src/app/Services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private formbuilder:FormBuilder, private authService:authservice,private spinner: NgxSpinnerService){
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required],
      gender:['',Validators.required],
      
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.spinner.show();
    if (this.form.valid) {
      this.authService.registerUser(this.form.value).subscribe(res=>{
        Swal.fire("Register Successfully")
        this.spinner.hide();
        this.form.reset();
      })
    }
  }

}
