import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
allUsers = new BehaviorSubject([]);
allUsers$ = this.allUsers.asObservable();
  constructor(private api: ApiService) { }

  getAllUsers():Observable<any>{
    const url ="QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
    return this.api.get(url).pipe(
        tap((result)=>{
            console.log('result',result);
          this.allUsers.next(result)

        })
    )
  }
}
