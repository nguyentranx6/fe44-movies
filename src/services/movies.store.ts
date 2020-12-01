import {Injectable} from '@angular/core';
import {MoviesService} from './movies.service';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {log} from 'util';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class MoviesStore {
    private subject = new BehaviorSubject([]);
    movieList$ = this.subject.asObservable();
    constructor(private moviesService: MoviesService) {
        this.loadAllMovies().subscribe();
        console.log('movies store', this.movieList$);
    }
    private loadAllMovies(){
     return  this.moviesService.getMovieList().pipe(
            tap(movies => this.subject.next(movies))
        )
    }
}
