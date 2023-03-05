import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from 'src/app/shared/model/data';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  
  @ViewChild('postForm') postForm! : NgForm;
  postsArray : Ipost[] = [];
  constructor(private _postsService : PostsService) { }

  ngOnInit(): void {
  }

  onSubmitForm(post: Ipost) { // to submit post data
    console.log(post);
    this.postForm.reset();
    this._postsService.createPosts(post)
      .subscribe(res => {
        console.log(res);
        this.postsArray.push(post);
      })
  }

}
