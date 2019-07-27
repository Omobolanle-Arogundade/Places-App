import { Injectable } from '@angular/core';
import { PlaceModel } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places: PlaceModel[] = [
    new PlaceModel(
      1,
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99
    ),
    new PlaceModel(
      2,
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99
    ),
    new PlaceModel(
      3,
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99
    )
  ];

  constructor() { }

  getPlaces() {
    console.log('getting places');
    return [...this.places];
  }

  getPlace(id) {
    return {... this.places.find(place => place.id === id)};
  }
}
