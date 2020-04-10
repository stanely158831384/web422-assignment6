import { Component, OnInit } from '@angular/core';
//import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';
import {PostService} from '../post.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  // blogPosts: Array<BlogPost> = blogData;
  //blogPos: number;
  blogPosts: Array<BlogPost>;
  page: number = 1;
  tag: String;
  category: String;
  querySub: any =[];

  constructor(private route: ActivatedRoute,
    private postservice: PostService) { }

  getPage(num): void{
    
    this.postservice.getPosts(num,this.tag,this.category).subscribe(data=>{
      
      if(data.length>0){
        this.blogPosts=data;
        this.page=num;
      } 
    });
  }

  ngOnInit(): void {
    console.log("in blog c , ngOnInit");
    this.querySub = this.route.queryParams.subscribe(params => {
      if(params['tag']){
        this.tag = params['tag'];
        this.category = null;
        }else{
        this.tag = null;
        }
        if(params['category']){
        this.category = params['category'];
        this.tag = null;
        }else{
        this.category = null;
        }
        this.getPage(+params['page'] || 1);
     });
  }

  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }

}
