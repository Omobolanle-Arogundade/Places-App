import { Component, OnInit, Input } from '@angular/core';
import { PlaceModel } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: PlaceModel;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}


  onBook() {
    this.modalCtrl.dismiss({message: 'dummy'}, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
