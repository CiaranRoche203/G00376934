import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  premierData:any =[];
 //above we have assigned the premierData to an array. Anything can be stored
 //below we have declared the services component in order to access the json data
  constructor(private service: ServicesService){}
  ngOnInit(): void {
    //here we are accessing and doing a console.log to show the json data
    this.service.getPremierData().subscribe((data) => {
      this.premierData = data.clubs;
      console.log(this.premierData);
    });
  }

}