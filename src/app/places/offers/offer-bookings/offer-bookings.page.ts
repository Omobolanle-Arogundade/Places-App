import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { PlaceModel } from '../../place.model';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: PlaceModel =  this.placesService.getPlace(1);

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (!params.get('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      console.log(+params.get('placeId'));
      this.place = this.placesService.getPlace(+params.get('placeId'));
    });
  }


  ionViewWillEnter(){}

}
