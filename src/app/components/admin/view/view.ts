import { Component } from '@angular/core';
import { Items } from '../../../services/items';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View {
   constructor(private service:Items){}
    myproducts:any;

    ngOnInit(){
        this.service.getItems().subscribe((data)=>{
          this.myproducts=data;
          console.log(this.myproducts)
        })
    }
}
