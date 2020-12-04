import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  allUsers = new BehaviorSubject([]);
  allUsers$ = this.allUsers.asObservable();
  constructor(private api: ApiService) {}
  user = JSON.parse(localStorage.getItem("user"));
  token = this.user.accessToken;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${this.token}`,
      'Access-Control-Allow-Headers':  '*'
    }),
    mode: 'no-cors'
  };

  getAllUsers(): Observable<any> {
    const url = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
    return this.api.get(url).pipe(
      tap((result) => {
        this.allUsers.next(result)
      })
    );
  }

  addNewUser(newUser): Observable<any> {
      console.log('this.token',this.token);
    const url = "QuanLyNguoiDung/ThemNguoiDung";
    return this.api.post(url, newUser, this.httpOptions).pipe(
      tap((result) => {
        console.log("result", result);
      })
    );
  }

  deleteUser(account): Observable<any> {

    const allCurrentUsers = this.allUsers.getValue();
    const userIndex = allCurrentUsers.findIndex(user=> user.taiKhoan == account);
    console.log('userIndex',userIndex);
    const newAllUsers$ = allCurrentUsers.slice(0);
    newAllUsers$.splice(userIndex,1)
    console.log('curent', allCurrentUsers.length);
    console.log('after', newAllUsers$.length);
    this.allUsers.next(newAllUsers$);
    const url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`;
    return this.api.delete(url, this.httpOptions).pipe(
        tap((result) => {
          console.log("result", result);
        })
    );
  }

  updateUser(userUpdate): Observable<any> {
    const url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return this.api.put(url, userUpdate, this.httpOptions).pipe(
        tap((result) => {
        })
    );
  }

  getDetailUserInfo(account): Observable<any>{

    const user = {
      taiKhoan: account
    }
    const url = `QuanLyNguoiDung/ThongTinTaiKhoan`;
    return this.api.post(url, user)
  }

}
