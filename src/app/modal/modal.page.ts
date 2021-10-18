import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverPage } from 'src/app/popover/popover.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  modalDataResponse: any;

  constructor(public modalCtrl: ModalController) {}

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: PopoverPage,
      componentProps: {
        'name': 'The Winter Soldier'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  ngOnInit() {
  }

}
