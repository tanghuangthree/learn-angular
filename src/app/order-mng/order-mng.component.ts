import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'order-mng',
  templateUrl: './order-mng.component.html',
  styleUrls: ['./order-mng.component.scss']
})
export class OrderMngComponent implements OnInit {
  private orderList:any;
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
    console.log(this.orderList);
  }

}
