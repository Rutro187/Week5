import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import {Post} from '../interfaces/post.interface'
import { PostService } from '../post.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: User;
  userPosts: Post[];
   
  constructor(private routeVariable: ActivatedRoute, private postServiceVarbile: PostService) { }

  ngOnInit() {
    this.currentUser = this.routeVariable.snapshot.data.user;
    this.postServiceVarbile.pullPostByUserId(this.currentUser.id).subscribe(
      (postsVariable: Post[])=>
      {
        this.userPosts = postsVariable;
        console.log(this.userPosts)
      }
    )
  }
}
//have to subscribe to the second ones because its not using a resolver