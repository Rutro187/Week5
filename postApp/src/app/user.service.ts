import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {User} from './interfaces/user.interface'; This doesnt happen here happens somewhere else
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

    pullUserInfo(givenID){
      return this.http.get(`https://jsonplaceholder.typicode.com/users/${givenID}`)
    }


}

// HTTP Client Injection
// Import Interface for user
// Create Function that takes an argument
// get url address from API
// Return the observable to wherever it's being used

