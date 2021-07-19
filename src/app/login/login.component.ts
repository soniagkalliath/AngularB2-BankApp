import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Banking Partner"

  accnum="Please enter account Number"

  acno=""

  pswd=""

  user:any={
    1000:{acno:1000,uname:"Aahil",password:"userone",balance:3000},
    1001:{acno:1001,uname:"aahan",password:"usertwo",balance:1000},
    1002:{acno:1002,uname:"laisha",password:"userthree",balance:3000},
    1003:{acno:1003,uname:"Neer",password:"userfour",balance:3000},
    1004:{acno:1004,uname:"Rishika",password:"userfive",balance:3000}
  }

  constructor() { }

  ngOnInit(): void {
  }


  accChange(event:any){

    
    this.acno = event.target.value
  }

  pswdChange(event:any){

 
    this.pswd = event.target.value
  }

  login(){

    var acno = this.acno;
    var pswd = this.pswd;
    let accDetails = this.user;

    if( acno in accDetails){

      if(pswd == accDetails[acno]["password"]){

        alert("Login successful")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("Invalid User")
    }

    
  }

}
