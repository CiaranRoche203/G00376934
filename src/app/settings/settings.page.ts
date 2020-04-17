import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Brightness } from '@ionic-native/brightness/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from'@ionic/storage';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  rangeval:number=100;
  myStatus: string;
  constructor(private brightness: Brightness, 
    private platform:Platform, private iab:InAppBrowser, private storage: Storage, private navCtrl: NavController,) {
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
  
  
  ngOnInit() {this.storage.get("myStatus").then((data) => {
    this.myStatus = data;})
    .catch();}
    saveStatus() 
    {console.log(this.myStatus);
      this.storage.set("myStatus", this.myStatus).then(() => {
        this.navCtrl.navigateBack('/premier');})
        .catch();
      }

}