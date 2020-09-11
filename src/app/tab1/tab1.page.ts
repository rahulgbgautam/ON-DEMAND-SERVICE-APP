import { Component , OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import * as $ from 'jquery'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public nav:NavController ) {}

  open_salon_page() {
    this.nav.navigateForward("/salon")
  }

}
