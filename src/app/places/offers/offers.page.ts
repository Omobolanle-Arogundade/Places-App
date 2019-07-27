import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { OfferModel } from './offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: OfferModel[] = this.offerService.getOffers();

  constructor(
    private offerService: OffersService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.offers = this.offerService.getOffers();
  }

}
