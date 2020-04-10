import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import {PostService} from '../post.service'

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  posts: BlogPost[];
  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    console.log("in the lastest post");
    this.postservice.getPosts(1,null,null).subscribe(data=>this.posts=data.slice(0,3));
  }

}
