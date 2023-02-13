import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: ActivatedRoute, private authService: AuthService) { }
  role = "";
  IsAdmin = false;
  isLogin: boolean = false;
  ngOnInit(): void {

    this.router.queryParams.subscribe((params: any) => {

      this.role = Object.values(params).toString();

      if (this.role == "Customer") {
        this.IsAdmin = false;
      } else {
        this.IsAdmin = true;
      }
    });


    this.authService.User.subscribe((data) => {
      if (data) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })

  }
  login() {
    let data = {
      Username: "admin@lanl.gov",
      Password: "admin123"
    }
    this.authService.SignInUser(data);
  }

  logout() {
    this.authService.SignOutUser();

  }

}
