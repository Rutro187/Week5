import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {

  constructor() { }
}

// Look at notes from earlier today EZ
// Implement Resolver on the service
// Pull userID from the route being activated/resolved
// Call the function in the user service and return
// Attach to appropriate route