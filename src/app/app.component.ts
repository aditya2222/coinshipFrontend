import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private http: HttpClient){}
  title = 'app';
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
testFunction() {
  console.log("button clicked");
}

ngOnInit(): void {
  this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
    data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    },
    err => {
      console.log("Error occured.")
    }
  );
}


}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}