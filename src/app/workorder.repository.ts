import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WorkOrder } from "./workorder.model";


@Injectable()
export class  WorkOrderRepository {
  private orders: WorkOrder[] = [];
  constructor(private http: HttpClient) {
    this.loadOrders().subscribe(data => {
      data.response.data.forEach((i: WorkOrder) => this.orders.push(i))
    })
  }

  loadOrders(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/data.json');
  }

  getOrders(): WorkOrder[] {
    return this.orders
  }
}

