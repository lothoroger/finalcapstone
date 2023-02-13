import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseUrls } from 'src/assets/BaseUrls';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  userRetrievedBool: boolean = false;


  customers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  custRetrievedBool: boolean = false;


  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get(BaseUrls.getLoginUrl(BaseUrls.USER_GROUPURL))
      .subscribe({
        next: ({ code, findUser, message }: any) => {
          this.user.next(findUser);
          this.userRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })

  }


  getCustomers() {
    this.http.get(BaseUrls.getUrl(BaseUrls.USER_GROUPURL))
      .subscribe({
        next: async ({ code, users, message }: any) => {
          this.customers.next(Object.assign([], users));
          this.custRetrievedBool = true;
          console.log("Dbservice getCustomer ", users);
        },
        error: (error) => {
          console.log(error);
        }
      })

  }




}
