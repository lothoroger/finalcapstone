import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  constructor(private router: ActivatedRoute) { }
  role = "";
  IsAdmin = false;

  ngOnInit(): void {

    this.router.queryParams.subscribe((params: any) => {

      this.role = Object.values(params).toString();

      if (this.role == "Customer") {
        this.IsAdmin = false;
      } else {
        this.IsAdmin = true;
      }
    });
  }

  Register() {
    return true;
  }
}