import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  admin:any;
username:any;
  constructor(private router:Router){}
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
}
