import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
@Injectable()
export class Tokeninterceptor implements HttpInterceptor
{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
const token =localStorage.getItem('token');
console.log(token+"kkkkkkk")
if (token) {
    // If we have a token, we set it to the header
    request = request.clone({
       setHeaders: {Authorization:`Bearer ${token}`}
    });
 }
 //`Bearer ${token}`
 return next.handle(request).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
          // redirect user to the logout page
       }
    }
    return throwError(err);
  })
 )
}





    
}