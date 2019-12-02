import { NavService } from './nav.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private nav: NavService,
              private router: Router){
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean{
          if(this.nav.logged == true){
            return true;
          }
          else{
            this.router.navigate(['/pagenotfound']);
          }
  }
}
