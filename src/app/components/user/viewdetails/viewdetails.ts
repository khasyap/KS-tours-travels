import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from '../../../services/items';
import { Cart } from '../../../services/cart';
import { Order } from '../../../services/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewdetails',
  standalone: false,
  templateUrl: './viewdetails.html',
  styleUrl: './viewdetails.css'
})
export class Viewdetails {
   constructor(private bs: ActivatedRoute, private service: Items, private cart: Cart,private order:Order) {
  
    }
    pid: any; obj: any;
    result: any;
    addNow() {
      this.result = this.cart.addtocart(this.obj);
//       Swal.fire({
//   title: "Drag me!",
//   icon: "success",
//   draggable: true
// });
Swal.fire({
      title: "Do you want to Add to Cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Success!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Failed", "", "info");
      }
    });
    }
    place: any;
    selectplace(obj: any) {
      console.log(obj)
      this.place = obj;
    }
    user: any; username: any;
    address: any; phone: any;
    placeobj: any;
    ordernow() {
  
      this.placeobj = {
        placeId: this.place.placeId,
        placeName: this.place.placeName,
        placePrice: this.place.placePrice,
        placeImage: this.place.placeImage,
        orderedDate:new Date(),
        username: this.username,
        address: this.address,
        phone: this.phone
  
      }
     this.result =this.order.placeorder(this.placeobj);
  
      Swal.fire({
      title: "Do you want to Order?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Success!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Failed", "", "info");
      }
    });
  
    }
  
  
  
  
  
    ngOnInit() {
  
      if (localStorage.getItem("user") != null) {
        this.user = localStorage.getItem("user");
        this.user = JSON.parse(this.user);
        this.username = this.user.username;
      }
  
  
      this.pid = this.bs.snapshot.paramMap.get("id");
      console.log("coming from details " + this.pid);
      this.obj = this.service.getItemById(this.pid);
    }
  
}
