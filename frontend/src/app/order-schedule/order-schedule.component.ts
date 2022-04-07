import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostEstimationService } from '../cost-estimation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-schedule',
  templateUrl: './order-schedule.component.html',
  styleUrls: ['./order-schedule.component.css']
})
export class OrderScheduleComponent implements OnInit {

  constructor(private router: Router, public costEstimationService: CostEstimationService) {
  }

  ngOnInit(): void {
  }

  estimate_cost(myOrder: NgForm) {
    this.costEstimationService.curr_order.email = localStorage.getItem("userLoggedIn"); 
    this.costEstimationService.estimateCost(this.costEstimationService.curr_order).subscribe((res) => {
      console.log(res);
      let Response: any;
      Response = res;
      this.costEstimationService.curr_order.cost = Response.cost;
      console.log("Estimate cost works!");
      this.router.navigateByUrl('order-confirmation');
    })
  }

  

}
