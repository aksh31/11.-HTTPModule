import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './container/posts/posts.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { HomeComponent } from './container/home/home.component';
import { AddPostComponent } from './container/add-post/add-post.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { AllPostsComponent } from './container/posts/all-posts/all-posts.component';
import { UpdatePostComponent } from './container/posts/update-post/update-post.component';
import { AuthInterceptorsService } from './shared/services/auth-interceptors.service';
import { LoaderComponent } from './container/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    AddPostComponent,
    PageNotFoundComponent,
    AllPostsComponent,
    UpdatePostComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorsService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
