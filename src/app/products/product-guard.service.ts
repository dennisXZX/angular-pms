import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _route: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // the url is products/10, url[0] is 'products' and url[1] is 10
    const id = parseInt(route.url[1].path, 10);

    if (isNaN(id) || id < 1) {
      alert('Invalid product ID');
      this._route.navigate(['/products']);
      return false;
    }

    return true;
  }

}
