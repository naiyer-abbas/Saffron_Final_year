import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './shared/order.model';

@Injectable({
  providedIn: 'root'
})
export class CostEstimationService {
  curr_order: Order = new Order();
  order: Order[] = [];
  readonly baseURL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }
  estimateCost(order: Order){
    return this.http.post(`${this.baseURL}calculateCost`, order);
  }

  placeOrder(order: Order){
    return this.http.post(`${this.baseURL}generateOrder`, order);
  }
}
