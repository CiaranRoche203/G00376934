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

 setLoginData() {
   //this.login.username = 'edupala.com';
   //this.login.password = '12345';
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