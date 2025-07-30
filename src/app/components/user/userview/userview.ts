import { Component } from '@angular/core';
import { Items } from '../../../services/items';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  standalone: false,
  templateUrl: './userview.html',
  styleUrl: './userview.css'
})
export class Userview {
  constructor(private service:Items, private router:Router,private r:ActivatedRoute){}
      myproducts:any;
      place:any;
      opendetails(pid:any){
      console.log(pid);
      this.router.navigateByUrl(`/user/details/${pid}`)
    }
  
      ngOnInit(){
          this.service.getItems().subscribe((data)=>{
            this.myproducts=data;
            console.log(this.myproducts)
          })
          this.place=this.r.snapshot.paramMap.get("place");
      }
}