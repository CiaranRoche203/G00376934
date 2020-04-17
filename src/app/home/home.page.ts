import { Component } from '@angular/core';
import { Storage } from'@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 //login: any = { username: '', password: '' };
 myStatus: String;
 myPassword: String;
 buttonEnabled: boolean=false;
 constructor(private storage: Storage) {}

 //example of storage. stores the users name and password
 onLogin() {
   //console.log('user name:', this.login.username );
   //console.log('user password', this.login.password );
   this.storage.get("myStatus").then((data) =>{
     this.myStatus = data;
   })
   .catch();
   this.storage.get("myPassword").then((data1)=> {
     this.myPassword = data1;
   })
   .catch();
 
 }
//this sets the data. the user must enter these details in order to obtain access
//once the details are correct the button is enabled
 setLoginData() {
   console.log(this.myStatus);
   console.log(this.myPassword);
   this.storage.set("myStatus", this.myStatus).then(
     () => {
       
       console.log("username set");
     }
   )
   .catch();
  this.storage.set("myPassword", this.myPassword).then(
     () => {
       console.log("password set", this.myStatus);
       console.log("password set", this.myPassword);
     }
   )
   if (this.myStatus == 'name'){
     this.buttonEnabled = true;
   }else{
     this.buttonEnabled = false;
   }
 }
 myCondition(){
  
  
 }
}