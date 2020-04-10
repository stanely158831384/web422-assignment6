import { Component, OnInit, Input } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {


  @Input() post: BlogPost;
  
  constructor() {

   }

  ngOnInit(): void {
  }

}
