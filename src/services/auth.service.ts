import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser = new BehaviorSubject({});
  currentUser$ = this.currentUser.asObservable();
  constructor(private http: HttpClient) {}

  register(value){
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy"
    return this.http.post(url, {...value, maNhom: 'GP01' })
  }

  login(value) {
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post(url, value);
  }

  setCurrentUser(value) {
    this.currentUser.next(value);
  }

  initCurrentUser() {
    const user = localStorage.getItem("user");
    if (user) {
      this.currentUser.next(JSON.parse(user));
    }
  }


}
