import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../../../services/items';
import { items } from '../../../services/itemsmodel';

@Component({
  selector: 'app-usercity',
  standalone: false,
  templateUrl: './usercity.html',
  styleUrl: './usercity.css'
})
export class Usercity {
  cities: string[] = [];
  constructor(private item:Items,private route:Router) {
    
  }
ngOnInit(): void {
  this.item.getItems().subscribe((allItems: items[]) => {
    const placeAreas = allItems.map(item => item.PlaceArea);
    this.cities = Array.from(new Set(placeAreas));
  });
}



  viewmore(place: any) {
    this.route.navigateByUrl(`/user/view/${place}`)
  }
}
