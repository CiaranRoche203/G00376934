import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.page.html',
  styleUrls: ['./premier.page.scss'],
})
export class PremierPage {
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
