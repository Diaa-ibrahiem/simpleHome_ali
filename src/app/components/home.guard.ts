import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class homeGurad implements CanActivate {
  constructor(
    private _route:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean{
    if(localStorage.getItem('user') == 'admin'&& localStorage.getItem('password')== 'admin'){
      return true
    }
    else {
     alert('Not Authorized to access this page')
     this._route.navigate(['/'])
      return false
    }
  }
}

// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class taskeenGuard implements CanActivate {

//   userData: any
//   constructor(
//     private router: Router,
//   ) { }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     return this._profile.getPersonalInfo().pipe(
//       map((res) => {

//       })
//     );
//   }
// }



// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

// @Injectable({providedIn: 'root'})
// export class NameGuard implements CanActivate {
//   constructor() { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)| Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree>
//   | boolean
//   | UrlTree {
//     if (res) {
//       // if (res.data.employeeId) {
//       if (res.data.personId) {
//         this.employee_data = res.data
//         return true;
//       } else {
//         this._snackbarService.show({ status: 'error', message: "TASKEEN_NOT_ALLOWRD" })
//         this.router.navigate(['/landing/applications']);
//         return false;
//       }
//     }
//   }
// }
