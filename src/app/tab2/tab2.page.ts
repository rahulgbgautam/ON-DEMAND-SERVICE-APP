import { Component  , OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

import * as $ from 'jquery'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public nav:NavController ) {}

  ngOnInit(){

  $(document).ready(function(){
    $("ion-button").click(function(){
      $("img").hide();
    
    });
  });

  }

  ongoing() {
    this.nav.navigateForward("/page1")
  }
  history() {
    this.nav.navigateForward("/page2")
  }

  opentab1(){
    this.nav.navigateForward("/tab1")
  }
  
}
