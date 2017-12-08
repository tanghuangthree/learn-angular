import { Injectable } from '@angular/core';

const orderList = [
  {orderId:111,orderName:'ForTest'},
  {orderId:222,orderName:'ForTest'},
  {orderId:333,orderName:'ForTest'},
  {orderId:444,orderName:'ForTest'},
];

@Injectable()
export class OrderService {

  constructor() { }

  public getOrderList():any {
    return orderList;
  }

}
