import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{BlogPost} from './BlogPost'
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient) { }
  getPosts(page, tag, category): Observable<BlogPost[]>{
    
    var urlstring;
    

    if(tag ==null&&category!=null){
      urlstring='https://radiant-inlet-68111.herokuapp.com/api/posts?page='+page+'&perPage=10&category='+category;
    }else if(category ==null&&tag!=null){
      urlstring='https://radiant-inlet-68111.herokuapp.com/api/posts?page='+page+'&perPage=10&tag='+ tag;
    }else if(category==null&&tag==null){
      urlstring='https://radiant-inlet-68111.herokuapp.com/api/posts?page='+page+'&perPage=10';
    }else{
      urlstring='https://radiant-inlet-68111.herokuapp.com/api/posts?page='+page+'&perPage=10'+'&tag='+ tag.substring(1)+'&category='+category;
    }


    
    return this.http.get<BlogPost[]>(urlstring);
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>('https://radiant-inlet-68111.herokuapp.com/api/posts/'+id);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>('https://radiant-inlet-68111.herokuapp.com/api/categories');
  }

  getTags(): Observable<string[]>{
    return this.http.get<string[]>('https://radiant-inlet-68111.herokuapp.com/api/tags');
  }

  getAllPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>('https://radiant-inlet-68111.herokuapp.com/api/posts?page=1&perPage='+Number.MAX_SAFE_INTEGER);
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`https://radiant-inlet-68111.herokuapp.com/api/posts`, data);  }

  
  updatePostById(id: string, data: BlogPost): Observable<any>{
      return this.http.put<any>(`https://radiant-inlet-68111.herokuapp.com/api/posts/${id}`, data);
    }

    deletePostById(id: string): Observable<any>{
      return this.http.delete<any>(`https://radiant-inlet-68111.herokuapp.com/api/posts/${id}`);
    }




}
