import { Component } from '@angular/core';
import { Items } from '../../../services/items';
import { Router } from '@angular/router';
import { items } from '../../../services/itemsmodel';

@Component({
  selector: 'app-city',
  standalone: false,
  templateUrl: './city.html',
  styleUrl: './city.css'
})
export class City {
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
    this.route.navigateByUrl(`/admin/view/${place}`)
  }
}
