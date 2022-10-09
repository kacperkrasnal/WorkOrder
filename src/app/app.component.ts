import { Component } from '@angular/core';
import { WorkOrder } from "./workorder.model";
import { WorkOrderRepository } from "./workorder.repository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'friendlySolution';
  searchQuery = ''
  constructor(private repository: WorkOrderRepository) {}

  get orders(): WorkOrder[] {
    return this.repository.getOrders().filter((el) =>
      el.description?.toLowerCase().includes(this.searchQuery.toLowerCase()))
  }
  getBadgeStatusClasses(order: WorkOrder): Object {
    return {
      "badge": true,
      "bg-primary": order.status == "New",
      "bg-secondary": order.status == "Confirmed",
      "bg-warning": order.status == "Canceled",
      "bg-success": order.status == "Completed"
    }
  }
  getBadgePriorityClasses(order: WorkOrder): Object {
    return {
      "badge": true,
      "bg-primary": order.priority == "Normal",
      "bg-secondary": order.priority == "Low",
      "bg-warning": order.priority == "High",
    }
  }
}
