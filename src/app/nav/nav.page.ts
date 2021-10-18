import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

import { Item } from "../models/item.models";
import { ItemsService } from "../services/items.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  public items: Array<Item>;

  constructor(
    private navCtrl: NavController,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

  public openItem(itemId: number): void {
    this.navCtrl.navigateForward(["details", itemId]);
  }
}