import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  Response: any
  orderList: any;
  counter: any = 1;

  constructor(private commonService: CommonService) {
    let email: any;
    email = localStorage.getItem("userLoggedIn");
    console.log(email);
    this.commonService.getOrders(email).subscribe((res) =>{
      this.Response = res;
      this.orderList = this.Response.order;
      console.log(this.Response.order);
    });
  }

  ngOnInit(): void {
  }

}
