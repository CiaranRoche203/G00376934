import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Storage } from'@ionic/storage';
@Component({
  selector: 'app-premier',
  templateUrl: './premier.page.html',
  styleUrls: ['./premier.page.scss'],
})
export class PremierPage {
  myStatus: string;
  constructor(private storage: Storage) { }
  //more storage examples, this is the strage of the users favourite team. discussed more on the settings pages
  ngOnInit() {
    this.storage.get("myStatus").then((data) => {
      this.myStatus = data;})
      .catch ();}
      //this is the data binding. button when clicked either hides or shows info
      //use of a boolean
  title = 'app';
numberOfTimes = 0;
hidden = true;
  count(){
    this.numberOfTimes++;
  }
show(){
  if(this.hidden==false){
    this.hidden=true;
  }else{
    this.hidden=false;
  }
}
}
