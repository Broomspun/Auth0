import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AUTH_CONFIG} from '../auth/auth0-variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_URL = 'http://localhost:5000/api/courses';
  courses: any;


  constructor(public auth: AuthService,
              private http: HttpClient) {}


  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.http.get(`${AUTH_CONFIG.apiUrl}api/courses`, httpOptions)
      .subscribe( (data) => {
          this.courses = data;
        },
        (err) => {
          this.courses = err;
        });
  }

}
