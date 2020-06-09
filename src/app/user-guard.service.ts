import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { OrganizationdataService } from './organizationdata.service';




@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate,CanLoad {

  constructor(private _data:OrganizationdataService,private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

      return this.isUserLoggedIn(state.url);
  }
  canLoad(_route:Route){
    return this.isUserLoggedIn(_route.path);
  }
  isUserLoggedIn(url:string):boolean{

    if(this._data.isLoggedIn){
      return true;
    }
    this._data.redirectURL=url;
    this._router.navigate(['/login']);
    return false;
  }
}
