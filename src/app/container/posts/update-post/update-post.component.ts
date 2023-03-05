import { NgClass } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ipost } from 'src/app/shared/model/data';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  @ViewChild('updateForm') updateForm! : NgForm;
  id!:string;
  constructor(private _route : ActivatedRoute,
              private _postService : PostsService,
              private _router : Router) { }

  ngOnInit(): void {
    this._route.params
                .subscribe((param : Params)=> {
                  console.log(param);
                  this.id = param['id'];
                  this._postService.getSinglePost(this.id)
                              .subscribe(res => {
                                this.updateForm.setValue({
                                  title : res.title,
                                  content : res.content
                                })
                              })
                })
  }


  onUpdateForm(updatedPost : Ipost){
    this._postService.updatePosts(updatedPost, this.id)
                        .subscribe(res => {
                          console.log(res);
                          this._router.navigate(['/posts/allposts'])
                        })
  }

}
