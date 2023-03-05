import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorsService implements HttpInterceptor {

  getToken! : string | null;
  constructor() {
    this.getToken = localStorage.getItem("setToken");
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Using Interseptor For All API Call');
    let updatedReq = req.clone({
      headers : req.headers.append('Autherzation', 'JWT Token Key')
    })
    return next.handle(updatedReq)
  }
  
}
