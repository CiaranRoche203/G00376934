import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Brightness } from '@ionic-native/brightness/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  rangeval:number=100;

  constructor(private brightness: Brightness, 
    private platform:Platform) {
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
  
  ngOnInit() {
   
   // let brightnessValue = 0.8;
//this.brightness.setBrightness(brightnessValue);
  }

}