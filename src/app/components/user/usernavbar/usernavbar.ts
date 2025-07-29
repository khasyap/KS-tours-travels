import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../../services/cart';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usernavbar',
  standalone: false,
  templateUrl: './usernavbar.html',
  styleUrl: './usernavbar.css'
})
export class Usernavbar {

admin:any;
username:any;
  constructor(private router:Router,private cart:Cart){}
  logout(){
     Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Logout!", "", "success");
        localStorage.removeItem("admin")
    this.router.navigateByUrl("");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
  }
  len=0;
  ngDoCheck(){
    this.len=this.cart.getCartLength();
  }
  
}
