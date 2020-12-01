import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem("user");
    if (user) {
      const { maLoaiNguoiDung } = JSON.parse(user);
      if (maLoaiNguoiDung === "QuanTri") {
        return true;
      } else {
        this.router.navigate(['/']);
        return false
      }
    }
    this.router.navigate(['/home/login'])
    return false;
  }
}
