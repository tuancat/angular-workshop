import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadService implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // neu goi fn () => preload
    // neu route.data.preload => fn() => preload
    // route: { path, componet, data }
    if (route.data && route.data.preload) {
      return fn();
    }

    return of(null);
  }

  constructor() { }
}
