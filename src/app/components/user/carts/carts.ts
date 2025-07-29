import { Component } from '@angular/core';
import { Cart } from '../../../services/cart';
import { Items } from '../../../services/items';
import { Order } from '../../../services/order';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carts',
  standalone: false,
  templateUrl: './carts.html',
  styleUrl: './carts.css'
})
export class Carts {
  constructor(private cart: Cart,private service:Items,private order:Order,private bs: ActivatedRoute) { }
  cartObj:any[]= [];
  ngOnInit() {
    this.cart.getCartItems().subscribe((res) => { this.cartObj = res });

    if (localStorage.getItem("user") != null) {
        this.user = localStorage.getItem("user");
        this.user = JSON.parse(this.user);
        this.username = this.user.username;
      }
  
  
      this.pid = this.bs.snapshot.paramMap.get("id");
      console.log("coming from details " + this.pid);
      this.obj = this.service.getItemById(this.pid);
  }

  
  result:any;
        deleteNow(pid:any){
            
            Swal.fire({
                  title: "Do you want to Delete?",
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  denyButtonText: `No`
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    Swal.fire("Success!", "", "success");
                    this.result=this.cart.deleteItem(pid);
                  } else if (result.isDenied) {
                    Swal.fire("Failed", "", "info");
                  }
                });
        }
  
    pid: any; obj: any;
    addNow() {
      this.result = this.cart.addtocart(this.obj);
      Swal.fire({
            title: "Do you want to Add ?",
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
  
  
  
  
  
  
      
}
