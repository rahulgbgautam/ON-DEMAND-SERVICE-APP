import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  imagePath = '';

  ngOnInit() {

    $(document).ready(function(){
      $("ion-fab-button").click(function(){
        $("ion-fab-button").hide();
      
      });
    });
  
  }

  }


