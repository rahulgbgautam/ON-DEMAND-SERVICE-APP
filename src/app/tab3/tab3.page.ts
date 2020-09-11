import { Component , OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public nav:NavController ) {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

  page3(){

    this.nav.navigateForward("/page3")
  }

  page4(){

    this.nav.navigateForward("/page4")
  }

  page5(){

    this.nav.navigateForward("/page5")
  }

  page6(){

    this.nav.navigateForward("/page6")
  }

  page7(){

    this.nav.navigateForward("/page7")
  }

  page8(){

    this.nav.navigateForward("/page8")
  }

}
