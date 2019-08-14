import { Component, OnInit } from '@angular/core';
import { Post } from 'deleteme/interfaces/post.interface';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postX: Post;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  let postID = this.activatedRoute.snapshot.params.id;
  this.postService.pullPostById(postID).subscribe((x: Post) =>
    { this.postX = x
    console.log(this.postX)})
  }

}
