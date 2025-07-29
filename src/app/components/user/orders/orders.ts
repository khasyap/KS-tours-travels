import { Component } from '@angular/core';
import { Order } from '../../../services/order';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  constructor(private orderService:Order){}

  products:any;user:any;username:any;

  ngOnInit(){
      this.user=localStorage.getItem("user");
      this.user=JSON.parse(this.user);
      this.username=this.user.username;

      this.orderService.getOrderByUsername(this.username).subscribe((res)=>{
          this.products=res;
      })

  }
}
