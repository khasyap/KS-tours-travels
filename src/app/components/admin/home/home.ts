import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  admin:any;
username:any;
constructor(private router:Router){

}

ngOnInit(){
  if(localStorage.getItem("admin")!=null){
    
    Swal.fire("Successfully Login");
    this.admin=localStorage.getItem("admin");
    this.admin=JSON.parse(this.admin);
    this.username=this.admin.username;
  }
  else{
    this.router.navigateByUrl('');
  }
}
}
