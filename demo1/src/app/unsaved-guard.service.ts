import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface UnsavedComponent {
  canDeactive(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuardService implements CanDeactivate<UnsavedComponent> {

  canDeactivate(component: UnsavedComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    console.log(component);

    if (!component.canDeactive()) {
      return confirm('May dang lam gi day co muon quit khong ?');
    }

    return true;
  }

  constructor() { }
}
