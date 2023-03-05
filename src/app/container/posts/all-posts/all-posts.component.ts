import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/model/data';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  postsArray: Ipost[] = [];
  error!: string;
  isLoading!: boolean;
  constructor(private _postsService: PostsService,
    private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderService.loaderStatus
    .subscribe(res=> this.isLoading = res);
    this.fetchPost();
  }

  fetchPost() { // to get posts
    // this.isLoading = true;
    this._loaderService.loaderStatus.next(true)
    this._postsService.getPosts() // it returns observable
      // .subscribe(data => {
      //   this.postsArray = data;
      // },
      // (err)=> {
      //   console.log(err);
      //   this.error = err.error.error;
      // })
      .subscribe({
        next: (data) => {
          setTimeout(() => {
            this.postsArray = data;
            // this.isLoading = false;
            this._loaderService.loaderStatus.next(false)
          }, 3000);
        },
        error: (err) => {
          console.log(err);
          setTimeout(() => {
            this.error = err.error.error;
            // this.isLoading = false;
            this._loaderService.loaderStatus.next(false)
          }, 3000);
        }
      })
  }


  onPostDelete(p: Ipost) { // to delete
    this._postsService.deletePost(p)
      .subscribe(res => {
        this.postsArray = this.postsArray.filter(post => post.id != p.id)
      })
  }

}
