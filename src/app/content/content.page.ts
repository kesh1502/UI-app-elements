import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent; dummyList: any;

  ngOnInit() {
  }

  constructor() {
    this.dummyList = [
      {
        value: "Esteban Gutmann IV",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }, {
        value: "Jennie Feeney",
      }, {
        value: "Shanon Heaney",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }, {
        value: "Jennie Feeney",
      }, {
        value: "Shanon Heaney",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }, {
        value: "Jennie Feeney",
      }, {
        value: "Shanon Heaney",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }, {
        value: "Jennie Feeney",
      }, {
        value: "Shanon Heaney",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }, {
        value: "Jennie Feeney",
      }, {
        value: "Shanon Heaney",
      }, {
        value: "Bernardo Prosacco Jr.",
      }, {
        value: "Nicholaus Kulas PhD",
      }, {
        value: "Jennie Feeney",
      }, {
        value: "Shanon Heaney",
      }
    ];
  }

  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  ScrollToPoint(X, Y) {
    this.content.scrollToPoint(X, Y, 1500);
  }

}

