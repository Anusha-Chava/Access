import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs/internal/operators/find';

@Component({
  selector: '.app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
public userName:string= '';
public Password = '';
public success:boolean=false;

public A:any[] =[{user: "admin", pass:1234},
    {user: "admin1", pass:123},
    {user: "admin2", pass:12}];

  constructor() { }

  ngOnInit(): void {
  }
  onUserName(event: Event){
  this.userName =(<HTMLInputElement>event.target).value;
  }
  onPass(event: Event){
    this.Password =(<HTMLInputElement>event.target).value;
  }
onsubmit(){

  for(var auth of this.A){
   if ((this.userName == (auth.user)) && (this.Password==auth.pass)){
     this.success = true;
     break;
   }
   else{
    this.success=false;
  }
  }

}
}


