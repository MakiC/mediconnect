import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, catchError, throwError, finalize } from 'rxjs';

import { AuthService } from '../service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly _authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('/auth/')) {
      const token: string | null = this._authService.getToken();
      if (token !== null) {
        //this.spinnerService.show();
        return next.handle(request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) })).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this._authService.logout();
            }
            return throwError(() => error);
          }),
          finalize(() => {
            //this.spinnerService.hide();
          })
        );
      }
    }
    return next.handle(request);
  }
}
