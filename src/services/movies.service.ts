import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  movieListSubject = new BehaviorSubject([]);
  movieList$ = this.movieListSubject.asObservable();
  constructor(private api: ApiService) {}

  getMovieList(): Observable<any> {
    const url = "QuanLyPhim/LayDanhSachPhim";
    return this.api.get(url).pipe(
      tap((result) => {
        this.movieListSubject.next(result);
      })
    );
  }

  getMovieDetail(movieId: number):Observable<any>{
    const url = `QuanLyPhim/LayThongTinPhim?maPhim=${movieId}`;
    return this.api.get(url);
  }
}
