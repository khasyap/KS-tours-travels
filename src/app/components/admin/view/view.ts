import { Component } from '@angular/core';
import { Items } from '../../../services/items';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View {
   constructor(private service:Items,private r:ActivatedRoute){}
    myproducts:any;
    place:any;
    obj:any;
    ngOnInit(){
        this.service.getItems().subscribe((data)=>{
          this.myproducts=data;
        })

      this.place=this.r.snapshot.paramMap.get("place");
    }
}
