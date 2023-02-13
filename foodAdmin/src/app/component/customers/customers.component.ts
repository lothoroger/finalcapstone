import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {


  customers: User[] = [];
  custForm: FormGroup = new FormGroup({});
  constructor(private custService: DbService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toast: ToastrService

  ) {

  }


  ngOnInit(): void {
    this.custService.getCustomers();
    this.custService.customers.subscribe((Userlist) => {
      console.log("Users ", Userlist);
      if (Userlist.length !== 0) this.customers = Userlist;
    })
  }


}
