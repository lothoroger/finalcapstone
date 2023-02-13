import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { BaseUrls } from 'src/assets/BaseUrls';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User = new BehaviorSubject<any>(null);

  customers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  custRetrievedBool: boolean = false;

  constructor(
    // private authorize: AuthService,
    private toast: ToastrService,
    private http: HttpClient,
    private router: Router
  ) { }


  public get UserSubjectValue() {
    if (this.User) {
      return this.User.value;
    } else {
      return null
    }
  }


  SignInUser(loginaccount: any) {
    console.log("login user", loginaccount.Username);
    if (loginaccount.Username == "admin@lanl.gov") {
      this.User.next(loginaccount);
    }
  }

  SignOutUser() {
    this.User.next(null);
  }


  role: any;

  ngOnInit(): void { }



  /*loginSubmit = () => {
    //this.router.navigate(['/register'], { queryParams: { data: this.role } });
    console.log("login data ", this.loginForm.value);
    let loginaccount = {
      Username: "admin@lanl.gov",
      Password: "admin123"
    }
    console.log("Login form ", loginaccount);
    this.authorize.SignInUser(loginaccount);  } */

  loginUser(data: any) {
    window.alert(data);
    this.http.get(BaseUrls.getLoginUrl(BaseUrls.USER_GROUPURL))
      .subscribe({
        next: async ({ code, finduser, message }: any) => {
          localStorage.setItem("authCode", code);
          localStorage.setItem("user ", finduser);
          this.router.navigate(['/'], { replaceUrl: true })
          this.toast.success(message, "Login Successfull");

        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'], { replaceUrl: true });
  }






}
