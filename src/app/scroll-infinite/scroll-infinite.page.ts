import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll-infinite',
  templateUrl: './scroll-infinite.page.html',
  styleUrls: ['./scroll-infinite.page.scss'],
})
export class ScrollInfinitePage implements OnInit {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
    constructor() {}
  
    loadData(event) {
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
  
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        /*if (data.length == 1000) { put the data array here
          event.target.disabled = true;
        }*/
      }, 500);
    }
  
    toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

  ngOnInit() {
  }

}
