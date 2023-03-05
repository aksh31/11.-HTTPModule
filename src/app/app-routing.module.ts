import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './container/add-post/add-post.component';
import { HomeComponent } from './container/home/home.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { AllPostsComponent } from './container/posts/all-posts/all-posts.component';
import { PostsComponent } from './container/posts/posts.component';
import { UpdatePostComponent } from './container/posts/update-post/update-post.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'addpost', component : AddPostComponent},
  {path : 'posts', component : PostsComponent, children : [
    {path : 'allposts', component : AllPostsComponent},
    {path : 'allposts/:id/update', component : UpdatePostComponent}
  ]},
  {path : 'pagenotfound', component : PageNotFoundComponent},
  {path : '**', redirectTo : 'pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
