import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {
  customersList: any = [];
  constructor(private customerService: CustomerService, public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.spinner.show();
    this.customerService.GetAllCustomers().subscribe(
      (result) => {
        this.customersList = result;
        this.spinner.hide();
      }
    )
  }
}
