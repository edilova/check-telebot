import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};
@Injectable({
  providedIn: 'root'
})

export class AppService {
  // headers = new HttpHeaders()
  //   .set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*');

  url = 'http://192.168.65.243:8000/';
  constructor(private http: HttpClient) { }

  registration(data) {
    console.log('inside ', data);
    return this.http.post('http://192.168.65.243:8000/users/', data, requestOptions)
  }
}
