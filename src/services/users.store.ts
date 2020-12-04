import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LoadingService } from "./loading.service";

@Injectable({
  providedIn: "root",
})
export class UsersStore {
  private allUserSubject = new BehaviorSubject([]);
  allUser$: Observable<any> = this.allUserSubject.asObservable();
  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {
    this.loadAllUser();
    console.log('UsersStore constructor');
  }
  loadAllUser() {
    const loadAllUser$ = this.userService
      .getAllUsers()
      .pipe(tap((allUser) => this.allUserSubject.next(allUser)));
    this.loadingService.showLoaderUntilCompleted(loadAllUser$).subscribe();
  }
}
