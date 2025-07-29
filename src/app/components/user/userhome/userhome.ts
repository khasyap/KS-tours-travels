import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userhome',
  standalone: false,
  templateUrl: './userhome.html',
  styleUrl: './userhome.css'
})
export class Userhome {
admin:any;
username:any;
constructor(private router:Router){

}

ngOnInit(){
  if(localStorage.getItem("user")!=null){
    Swal.fire("Successfully Login");
    this.admin=localStorage.getItem("user");
    this.admin=JSON.parse(this.admin);
    this.username=this.admin.username;
  }
  else{
    this.router.navigateByUrl('');
  }
}
}
