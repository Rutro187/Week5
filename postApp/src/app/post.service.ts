import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

pullPostById(givenId){
  return this.http.get(`https://jsonplaceholder.typicode.com/posts/${givenId}`)
}
pullPostByUserId(givenId){
  return this.http.get(`https://jsonplaceholder.typicode.com/posts?${givenId}`)
}
}



// HTTP Client Injection
// Import Interface for post


// POST BY ID
// Create Function that takes an argument
// get url address from API
// Return the observable to wherever it's being used

// POSTS BY USER_ID
// Create Function that takes an argument
// get url address from API
// Return the observable to wherever it's being used
