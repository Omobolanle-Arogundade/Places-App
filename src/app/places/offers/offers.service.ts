import { Injectable } from '@angular/core';
import { OfferModel } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: OfferModel[] = [
    new OfferModel(
      1,
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99
    ),
    new OfferModel(
      2,
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99
    ),
    new OfferModel(
      3,
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99
    )
  ];

  constructor() { }


  getOffers() {
    return [...this.offers];
  }
}
