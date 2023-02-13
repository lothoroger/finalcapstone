import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { BaseUrls } from 'src/assets/BaseUrls';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string | undefined;
  loginInProcess: boolean = false;
  user: User[] = [];


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  handleLogin() {
    console.log("this f ", this.loginForm.value);
    this.authService.loginUser(this.loginForm.value);

  }


}

