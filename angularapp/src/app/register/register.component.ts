import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Register } from './register';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: any;
  // user = new Register('', '', '', []);
  isRegistered = false;
  submitted = false;
  errorMessage = '';
 hide=true;

  constructor(private router:Router) { }
  login(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      // roleSelection: this.createRoles(this.roles)
  });
 
  }

}
