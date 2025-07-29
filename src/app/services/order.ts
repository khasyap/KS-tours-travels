import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Order {
  order:any[]=[]

    placeorder(obj:any){
      this.order.push(obj);
      return "order placed successfully"
    }

    getAllOrders(){
      return of(this.order);
    }

    getOrderByUsername(uname:any){
      return of(this.order.filter(e=>e.username==uname));
    }
}
