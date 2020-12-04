import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, shareReplay, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(private http: HttpClient) {
    /* !null = true, !!nul = false*/
    this.isLoggedIn$ = this.currentUser$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((user) => !user));
    this.initCurrentUser();
  }

  register(value) {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    return this.http.post(url, { ...value, maNhom: "GP01" });
  }

  login(value) {
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post(url, value).pipe(
      tap((user) => {
        this.currentUserSubject.next(user);
        localStorage.setItem("user", JSON.stringify(user));
      }),
      shareReplay()
    );
  }

  logout(){
    this.currentUserSubject.next(null);
    localStorage.removeItem('user')
  }

  setCurrentUser(value) {
    this.currentUserSubject.next(value);
  }

  initCurrentUser() {
    const user = localStorage.getItem("user");
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }
}
