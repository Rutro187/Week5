import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service'




@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userID = route.params.id;
    return this.userService.pullUserInfo(userID)
  }
    

  constructor( private userService: UserService) { }
}

// Look at notes from earlier today EZ
// Implement Resolver on the service
// Pull userID from the route being activated/resolved
// Call the function in the user service and return
// Attach to appropriate route