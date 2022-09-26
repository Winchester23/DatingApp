import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient){setTheme('bs4')}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
     next : response => this.users = response,
     error : error => console.log(error)
    })
  }
}
