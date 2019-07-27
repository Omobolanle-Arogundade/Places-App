import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { PlaceModel } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: PlaceModel[] = this.placesService.getPlaces();

  constructor(
    public placesService: PlacesService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }

}
