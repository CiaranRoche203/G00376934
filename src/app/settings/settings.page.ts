import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Brightness } from '@ionic-native/brightness/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  rangeval:number=100;

  constructor(private brightness: Brightness, 
    private platform:Platform, private iab:InAppBrowser) {
    this.platform.ready().then(()=>{
      this.setBrightness();
    })
  }
  setBrightness(){
    this.brightness.setBrightness(this.rangeval/100).then(
      ()=>{
      },(err)=>{
        //alert(JSON.stringify(err));
        });
  }
  openBlank(){
    this.iab.create('https://www.premierleague.com/', '_blank');
  }
  openBlank1(){
    this.iab.create('https://fantasy.premierleague.com/', '_blank');
  }
  
  ngOnInit() {
   
   // let brightnessValue = 0.8;
//this.brightness.setBrightness(brightnessValue);
  }

}