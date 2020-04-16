import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  premierData:any =[];
 
  constructor(private service: ServicesService){}
  ngOnInit(): void {
    this.service.getPremierData().subscribe((data) => {
      this.premierData = data.clubs;
      console.log(this.premierData);
    });
  }

}