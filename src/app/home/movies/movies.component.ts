import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
@Input() MovieList
  constructor() { }

  ngOnInit(): void {
    console.log('movieslist', this.MovieList);
  }

}
