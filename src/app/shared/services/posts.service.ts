import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ipost } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseURL: string = `https://first-http-project-2d265-default-rtdb.firebaseio.com`;
  fetch_postUrl: string = `${this.baseURL}/posts.json`;
  constructor(private _http: HttpClient) { }

  getPosts() : Observable<Ipost[]> {
    let headers = new Headers();
    headers.append( 'content-type' , 'Application/json')
    return this._http.get<{[k : string] : Ipost}>(this.fetch_postUrl, {
      headers : {
        'content-type' : 'Application/json'
      }
    }) // 1 param req
      .pipe(
        map(res => {
          const arr: Ipost[] = [];
          if (res) {
            Object.entries(res).forEach(([key, val]) => { // [bmnmn , obj]
              arr.push({ ...val, id: key })
            })
          }
          return arr;
        })
      )
  }
  
  createPosts(post : Ipost) : Observable<{name : string}>{
    return this._http.post<{name : string}>(this.fetch_postUrl, post); // 2 parameter(url, data)
  }
  
  deletePost(p : Ipost): Observable<null>{
    let deleteUrl = `${this.baseURL}/posts/${p.id}.json`;
    return this._http.delete<null>(deleteUrl);
  }

  updatePosts(p : Ipost, id : string) : Observable<Ipost>{
    let updateUrl = `${this.baseURL}/posts/${id}.json`;
    return this._http.patch<Ipost>(updateUrl, p); // 2
  }

  getSinglePost(id : string) : Observable<Ipost>{
    let getUrl = `${this.baseURL}/posts/${id}.json`;
    return this._http.get<Ipost>(getUrl);
  }


}
