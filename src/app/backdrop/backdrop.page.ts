import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.page.html',
  styleUrls: ['./backdrop.page.scss'],
})
export class BackdropPage implements OnInit {

  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;

  constructor() { }

  ngOnInit() {
  }

}
