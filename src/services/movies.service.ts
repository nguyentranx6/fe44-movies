import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import {HttpHeaders} from '@angular/common/http';
import {log} from 'util';

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  movieListSubject = new BehaviorSubject([]);
  movieList$ = this.movieListSubject.asObservable();
  user = JSON.parse(localStorage.getItem("user"));
  token = this.user?.accessToken;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${this.token}`,
      'Access-Control-Allow-Headers':  '*'
    }),
    mode: 'no-cors'
  };
  constructor(private api: ApiService) {}

  getMovieList(): Observable<any> {
    const url = "QuanLyPhim/LayDanhSachPhim";
    return this.api.get(url)
  }

  getMovieDetail(movieId: number):Observable<any>{
    const url = `QuanLyPhim/LayThongTinPhim?maPhim=${movieId}`;
    return this.api.get(url);
  }

  getShowtimeDetail(movieId: number): Observable<any>{
    const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`;
    return this.api.get(url)
  }

  getBookingDetail(showtimeID: number):Observable<any>{
    const url =  `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeID}`
    return this.api.get(url)
  }

  deleteMovies(idMovie): Observable<any> {
    const url = `QuanLyPhim/XoaPhim?MaPhim=${idMovie}`;
    return this.api.delete(url, this.httpOptions).pipe(
        tap((result) => {
          console.log('result delete', result);
        })
    );
  }

  addMovies(newMovie): Observable<any>{
    const url = `QuanLyPhim/ThemPhimUploadHinh`;
    const frm = new FormData();
    for (let key in newMovie) {
      frm.append(key, newMovie[key]);
    }
    frm.append('maNhom', 'GP01');

    return this.api.post(url,frm)
  }

  updateMovies(newMovie): Observable<any>{
    const url = `QuanLyPhim/CapNhatPhimUpload`;
    const formData = new FormData();
    for (let key in newMovie) {
      formData.append(key, newMovie[key]);
    }
    formData.append('maNhom', 'GP01');

    return this.api.post(url,formData,this.httpOptions)
  }

  handleBooking(ticket): Observable<any>{
    const url = `QuanLyDatVe/DatVe`;
    const newTicket = {
      ...ticket,
      "taiKhoanNguoiDung": this.user.taiKhoan
    }
    console.log(newTicket)

    return this.api.post(url,newTicket,this.httpOptions)
  }

}
