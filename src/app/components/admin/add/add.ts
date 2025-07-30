import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Items } from '../../../services/items';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  productForm:FormGroup=new FormGroup({});

    constructor(private fb:FormBuilder,private service:Items){
        this.productForm=this.fb.group({
          placeId:['',Validators.required],
          placeAre:['',Validators.required],
          placeName:['',Validators.required],
          placeDescription:['',Validators.required],
          placeCategory:['',Validators.required],
          placePrice:['',Validators.required],
          placeImage:['',Validators.required]
        })
    }
    result:any;
  
submitPlace(){
      
      Swal.fire({
      title: "Do you want to Add to Places?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Success!", "", "success");
        console.log(this.productForm.value)
      this.result=this.service.addItems(this.productForm.value);
      } else if (result.isDenied) {
        Swal.fire("Failed", "", "info");
      }
    });
    } 

}
