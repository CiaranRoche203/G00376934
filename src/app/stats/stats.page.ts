import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  goalScorers:any =[];
  assistsData:any =[];
  //myId = null;
  constructor(private service: ServicesService) { }

 ngOnInit(): void {
   this.service.getGoals().subscribe((data)=>{
     this.goalScorers = data.clubs;
     console.log(this.goalScorers);
   });
   this.service.getAssists().subscribe((data1)=>{
    this.assistsData = data1.clubs;
    console.log(this.assistsData);
  });
 
}
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

   //this.myId = this.activatedRoute.snapshot.paramMap.get('myid');