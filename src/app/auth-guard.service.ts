import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class AuthGuardService implements CanActivate{
    constructor(private authservice : AuthService, private router : Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let isLoggedIn = this.authservice.isAuthenticated();

        if(isLoggedIn){
            return true;
        }else{
            this.router.navigate(['/login'], {
                queryParams: { error: 'Please Login.' }
              });
            return false;
        }

    }
}