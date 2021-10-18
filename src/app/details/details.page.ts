import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Item } from "../models/item.models";
import { ItemsService } from "../services/items.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    // "id" is the name of the parameter in the
    // app-routing.module.ts file:
    // ==> path: "details/:id",
    const itemId = +this.route.snapshot.params.id;

    this.item = this.itemsService.getItem(itemId);
  }
}
