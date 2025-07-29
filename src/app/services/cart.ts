import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cart:any[]=[

    ]

    addtocart(obj:any){
    const cartitem=this.cart.find(e=>e.placeId==obj.placeId);
    if(!cartitem){
      this.cart.push(obj);
      return "Added sucessfully"
    }
    else{
      
      return "Already added ";
    }
  }
    getCartLength(){
      return this.cart.length;
    }
    getCartItems(){
      return of(this.cart);
    }
    deleteItem(pid:any){
    const index=this.cart.findIndex((e)=>e.placeId==pid);
    if(index!=-1){
      this.cart.splice(index,1);
      return "deleted successfully"
    }
    else{
      return "something went wrong"
    }
  }

  
}
