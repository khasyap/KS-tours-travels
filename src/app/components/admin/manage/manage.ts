import { Component } from '@angular/core';
import { Items } from '../../../services/items';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  standalone: false,
  templateUrl: './manage.html',
  styleUrl: './manage.css'
})
export class Manage {
  constructor(private service:Items){}
        myproducts:any;updateobj:any;
    
        ngOnInit(){
            this.service.getItems().subscribe((data)=>{
              this.myproducts=data;
              console.log(this.myproducts)
            })
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
        this.result=this.service.deleteItem(pid);
      } else if (result.isDenied) {
        Swal.fire("Failed", "", "info");
      }
    });
        }

        updatecontent(content:any){
          this.updateobj=content;  
          console.log(this.updateobj);

        }

        updatenow(){
        this.result=  this.service.updateItem(this.updateobj);
        alert(this.result);
        }

}
