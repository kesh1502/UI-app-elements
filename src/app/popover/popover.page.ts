import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})

export class PopoverPage implements OnInit {

  @Input() name: string;

  constructor(private modalCtr: ModalController) {}

  ngOnInit() { }
  
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }
}

