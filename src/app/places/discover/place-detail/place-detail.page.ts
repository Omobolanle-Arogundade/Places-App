import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlaceModel } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: PlaceModel;

  constructor(
    private modalCtrl: ModalController,
    private routes: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService
  ) { }

  ngOnInit() {

    this.routes.paramMap.subscribe(param => {
      if (!param.get('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discovery');
      }

      this.place = this.placeService.getPlace(+param.get('placeId'));
    });
  }


  bookAPlace() {
    // console.log('book a place');
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place
      }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
    });
  }
}
