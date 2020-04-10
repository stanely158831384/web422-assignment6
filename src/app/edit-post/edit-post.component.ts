import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: String;
  @Output() click = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor(private postserivce: PostService,
    private route: ActivatedRoute,
    private router: Router) { }


  formSubmit() {
    //let id = this.route.snapshot.params['id'];
    this.tags.split(",").map(tag => tag.trim());
    this.postserivce.updatePostById(this.blogPost._id,this.blogPost).subscribe(data=>{this.router.navigate(['admin']);});
    
  }

  deltePost(){
    this.postserivce.deletePostById(this.blogPost._id).subscribe(data=>{this.router.navigate(['admin']);});
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.postserivce.getPostbyId(id).subscribe(data => { this.blogPost = data });
    this.tags = this.blogPost.tags.toString();
  }

}
