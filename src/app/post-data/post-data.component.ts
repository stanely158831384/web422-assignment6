import { Component, OnInit, Input, Output } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service'
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'protractor';
import { FormsModule } from '@angular/forms';
import { Comment } from '../Comment'


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {


  post: BlogPost;
  querySub: any = [];
  id: number;
  commentObject: Comment = new Comment;

  commentName: string;
  commentText: string;

  //@Output() ngSubmit = new EventEmitter();


  constructor(private postserivce: PostService,
    private route: ActivatedRoute) { }

  submitComment() {
    //console.log(this.commentName);
    this.commentObject.author = this.commentName;
    this.commentObject.comment = this.commentText;
    this.commentObject.date = new Date().toLocaleDateString();
    this.post.comments.push(this.commentObject);
    this.postserivce.updatePostById(this.post._id, this.post).subscribe(data => { this.commentName = "", this.commentText = "" });
  }
  ngOnInit(): void {
    console.log("adfadf");
    this.querySub = this.route.params.subscribe(params => {
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.postserivce.getPostbyId(params['id']).subscribe(data => {
        this.post = data;
        this.post.views+=1;
      });

      //this.postserivce.updatePostById(this.post._id,this.post).subscribe();

    })


  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }



}
