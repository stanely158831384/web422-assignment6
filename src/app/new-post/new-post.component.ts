
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost;
  tags: String;



  constructor(private postserivce: PostService,
    private route: ActivatedRoute,
    private router: Router) { }


  formSubmit() {
    this.blogPost.tags=this.tags.split(",").map(tag => tag.trim()).slice();
    console.log(this.tags[0]);
    //this.blogPost.tags=["#lovedit","#scary"];
    this.blogPost.isPrivate=false;
    this.blogPost.postDate=new Date().toLocaleDateString();
    this.blogPost.postedBy="WEB422 Student";
    this.blogPost.views=0;
    this.postserivce.newPost(this.blogPost).subscribe(data=>{this.router.navigate(['admin']);});
    console.log("formSubmit done");
    
  }


  ngOnInit(): void {
  }

}
