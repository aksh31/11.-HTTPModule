import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  token: string = "qwerty";

  constructor(){ }

  ngOnInit(): void {
    localStorage.setItem("setToken", this.token);
  }
}
