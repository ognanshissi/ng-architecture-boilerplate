import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add token to the header for example
    const authToken = "uehuyrvsnc02"; // this.authService.getAuthToken()

    // the req is immutable
    req = req.clone({
      setHeaders: {
        Authoriation: authToken,
      },
    });
    return next.handle(req);
  }
}
