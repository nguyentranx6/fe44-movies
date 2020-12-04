import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { log } from 'util';
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesStore {
  private subject = new BehaviorSubject([]);
  movieList$ = this.subject.asObservable();
  constructor(private moviesService: MoviesService, private loadingService: LoadingService) {
    this.loadAllMovies();

  }
  private loadAllMovies() {
    const loadMovies$ = this.moviesService
      .getMovieList()
      .pipe(tap((movies) => this.subject.next(movies)));
    this.loadingService.showLoaderUntilCompleted(loadMovies$).subscribe()
  }
}
