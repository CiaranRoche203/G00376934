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
//here is a demosntration of my plugins
//i set a brightness plugin but it does not work on ionic serve only on device
//so i decided to create an in app browser plugin in as well
//i also used this page demonstrate more of the storage knowledge i learnt in class (storage on home page also)
  rangeval:number=100;
  myStatus: string;
  constructor(private brightness: Brightness, 
    private platform:Platform, private iab:InAppBrowser, private storage: Storage, private navCtrl: NavController,) {
    this.platform.ready().then(()=>{
      this.setBrightness();
    })
  }
  //this is creating a range where the user can choose from 0 to 100, it will be changed on a bar which will be seen on the html page
  setBrightness(){
    this.brightness.setBrightness(this.rangeval/100).then(
      ()=>{
      },(err)=>{
        //alert(JSON.stringify(err));
        });
  }
  //here is the function for an in app browser, it opens two links that are related to the app
  openBlank(){
    this.iab.create('https://www.premierleague.com/', '_blank');
  }
  openBlank1(){
    this.iab.create('https://fantasy.premierleague.com/', '_blank');
  }
  
  //this is the storage function
  //it saves the favourite team of the user based on input
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