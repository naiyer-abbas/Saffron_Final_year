import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CostEstimationService} from '../cost-estimation.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  

  constructor(private router: Router, public costEstimationService: CostEstimationService) { }

  ngOnInit(): void {
  }

  placeOrder(){
    this.costEstimationService.placeOrder(this.costEstimationService.curr_order).subscribe((res) => {
      console.log("Order Placed Successfully!");
      console.log(res);
      this.router.navigateByUrl('my-orders');
    })
  }

  discardOrder(){
    console.log("Order has been Cancelled");
    this.router.navigateByUrl('dashboard');
  }

}
