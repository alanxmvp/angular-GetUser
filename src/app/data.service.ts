import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://insta.nextacademy.com/api/v1/users/')
  }

  getSpecificUser(userId) {
    return this.http.get('https://insta.nextacademy.com/api/v1/images/?userId=' + `${userId}`)
  }
}
